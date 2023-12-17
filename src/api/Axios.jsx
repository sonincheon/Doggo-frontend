import axios from "axios";

const MUNG_HOST = "http://localhost:8111";

const AxiosApi = {
  //로그인
  Login: async (email, pw) => {
    const login = {
      memberEmail: email,
      memberPassword: pw,
    };
    return await axios.post(MUNG_HOST + "/auth/login", login);
  },
  //회원가입
  // 회원가입시 아이디 체크
  SingupIdCheck: async (email) => {
    return await axios.get(MUNG_HOST + `/auth/exists/${email}`);
  },

  // 회원가입 insert
  Signup: async (email, pw, tel, name, addr, birth, gender) => {
    const userInfo = {
      memberEmail: email,
      memberPassword: pw,
      memberTel: tel,
      memberName: name,
      memberAddress: addr,
      memberBirth: birth,
      memberGender: gender,
    };
    return await axios.post(MUNG_HOST + `/auth/signup`, userInfo);
  },

  //회원 조회
  memberGet: async (email) => {
    return await axios.get(MUNG_HOST + `/member/detail/${email}`);
  },

  // 유형(type)에 따라 memberUpdate 호출 및 수정
  memberUpdate: async (changeInfo, type) => {
    let member = {};
    switch (type) {
      case 1:
        member = {
          memberEmail: window.localStorage.getItem("email"),
          memberBirth: changeInfo,
        };
        console.log(member);
        break;
      case 2:
        member = {
          memberEmail: window.localStorage.getItem("email"),
          memberAddress: changeInfo,
        };
        break;
      case 3:
        member = {
          memberEmail: window.localStorage.getItem("email"),
          memberTel: changeInfo,
        };
        break;
      case 4:
        member = {
          memberEmail: window.localStorage.getItem("email"),
          memberImage: changeInfo,
        };
        console.log(member);
        break;
      default:
        break;
    }
    return await axios.put(MUNG_HOST + `/member/modify`, member);
  },

  // 회원 탈퇴
  memberDelete: async (email) => {
    console.log(email);
    return await axios.delete(MUNG_HOST + `/member/delete/${email}`);
  },

  // 펫 등록
  petReg: async (name, gender, Type, breed, birth, image, detail) => {
    const pet = {
      memberId: window.localStorage.getItem("email"),
      petName: name,
      gender: gender,
      animalType: {
        id: Type,
      },
      breed: breed,
      birthDate: birth,
      imageLink: image,
      detail: detail,
    };
    return await axios.post(MUNG_HOST + "/pet/new", pet);
  },

  //펫 조회
  petGet: async (email) => {
    return await axios.get(MUNG_HOST + `/pet/list/email?email=${email}`);
  },

  //이메일 샌더
  EmailCert: async (email) => {
    return await axios.post(MUNG_HOST + `/auth/emailConfirm?email=${email}`);
  },

  //사료 추가
  FeedReg: async (feedImg, feedInfo, feedName, feedPrice, feedType) => {
    const feedData = {
      feedImg: feedImg,
      feedInfo: feedInfo,
      feedName: feedName,
      feedPrice: feedPrice,
      feedType: feedType,
    };
    return await axios.post(MUNG_HOST + "/feed/new", feedData);
  },

  // 사료 타입별 출력
  FeedList: async (type) => {
    return await axios.get(MUNG_HOST + `/feed/list/type?type=${type}`);
  },

  // 사료 타입별 출력
  FeedInfo: async (id) => {
    return await axios.get(MUNG_HOST + `/feed/list/id?id=${id}`);
  },

  //판매 추가
  SaleReg: async (
    feedName,
    memberId,
    salesAddr,
    salesAutoDelivery,
    salesDelivery,
    salesPrice,
    salesName
  ) => {
    const saleData = {
      feedName: feedName,
      memberId: memberId,
      salesAddr: salesAddr,
      salesAutoDelivery: salesAutoDelivery,
      salesDelivery: salesDelivery,
      salesPrice: salesPrice,
      salesType: "AUTO",
      salesName: salesName,
    };
    return await axios.post(MUNG_HOST + "/sale/new", saleData);
  },

  //성공페이지 구매내역 디테일 출력
  SaleInfo: async (id) => {
    return await axios.put(MUNG_HOST + `/sale/detail/${id}`);
  },

  //회원 구매 내역 조회
  SaleUserList: async (email) => {
    return await axios.get(MUNG_HOST + `/sale/list/email?email=${email}`);
  },

  // 구매내역 삭제
  SaleDelete: async (id) => {
    return await axios.delete(MUNG_HOST + `/sale/delete/${id}`);
  },

  //배송 수정
  SaleModify: async (id, salesAddr, salesAutoDelivery, salesDelivery) => {
    const SaleModifyData = {
      salesAddr: salesAddr,
      salesAutoDelivery: salesAutoDelivery,
      salesDelivery: salesDelivery,
    };
    return await axios.put(MUNG_HOST + `/sale/modify/${id}`, SaleModifyData);
  },

  //일기 추가
  DiaryReg: async (diaryDetail, diaryTitle, diaryWriteDate, memberId) => {
    const DiaryData = {
      diaryDetail: diaryDetail,
      diaryTitle: diaryTitle,
      diaryWriteDate: diaryWriteDate,
      memberId: memberId,
    };
    return await axios.post(MUNG_HOST + "/diary/new", DiaryData);
  },

  //수행 추가
  QuestReg: async (
    petId,
    petImg,
    petName,
    quest1,
    quest2,
    quest3,
    quest4,
    quest5,
    day
  ) => {
    const QuestData = {
      petId: petId,
      petImg: petImg,
      petName: petName,
      quest1: quest1,
      quest2: quest2,
      quest3: quest3,
      quest4: quest4,
      quest5: quest5,
      questPerformance: day,
    };
    return await axios.post(MUNG_HOST + "/quest/new", QuestData);
  },
};

export default AxiosApi;
