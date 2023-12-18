import axios from "axios";
import Common from "../utill/Common";

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
  memberGet: async () => {
    const res = await Common.TakenToken(); 
    const email = res.data;
    const accessToken =Common.getAccessToken();
    return await axios.get(MUNG_HOST + `/member/detail/${email}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  // 유형(type)에 따라 memberUpdate 호출 및 수정
  memberUpdate: async (changeInfo, type) => {
    const res = await Common.TakenToken(); 
    const email = res.data;
    const accessToken =Common.getAccessToken();
    let member = {};
    switch (type) {
      case 1:
        member = {
          memberEmail: email,
          memberBirth: changeInfo,
        };
        console.log(member);
        break;
      case 2:
        member = {
          memberEmail: email,
          memberAddress: changeInfo,
        };
        break;
      case 3:
        member = {
          memberEmail: email,
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
    return await axios.put(MUNG_HOST + `/member/modify`, member,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  // 회원 탈퇴
  memberDelete: async () => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    return await axios.delete(MUNG_HOST + `/member/delete/${email}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  // 펫 등록
  petReg: async (name, gender, Type, breed, birth, image, detail) => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    const pet = {
      memberId: email,
      petName: name,
      gender: gender,
      animalType: Type,
      breed: breed,
      birthDate: birth,
      imageLink: image,
      detail: detail,
    };
    return await axios.post(MUNG_HOST + "/pet/new", pet,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  // 펫 수정
  petUpdate: async (id, name, gender, Type, breed, birth, image, detail) => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    const pet = {
      memberId: email,
      petName: name,
      gender: gender,
      animalType: Type,
      breed: breed,
      birthDate: birth,
      // image 값이 존재할 때만 imageLink 추가
      ...(image && { imageLink: image }),
      detail: detail,
    };

    return await axios.put(MUNG_HOST + `/pet/modify/${id}`, pet,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  //펫 조회
  petGet: async () => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    return await axios.get(MUNG_HOST + `/pet/list/email?email=${email}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  // 펫 삭제
  petDel: async (id) => {
    return await axios.delete(MUNG_HOST + `/pet/delete/${id}`);
  },

  //이메일 샌더
  EmailCert: async () => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    return await axios.post(MUNG_HOST + `/auth/emailConfirm?email=${email}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
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
    salesAddr,
    salesAutoDelivery,
    salesDelivery,
    salesPrice,
    salesName
  ) => {
    const accessToken = Common.getAccessToken();
    const res = await Common.TakenToken(); 
    const email = res.data
    const saleData = {
      feedName: feedName,
      memberId: email, //이메일 데이타 입력
      salesAddr: salesAddr,
      salesAutoDelivery: salesAutoDelivery,
      salesDelivery: salesDelivery,
      salesPrice: salesPrice,
      salesType: "AUTO",
      salesName: salesName,
    };
    return await axios.post(MUNG_HOST + "/sale/new", saleData,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
      },
    });
  },

  //성공페이지 구매내역 디테일 출력
  SaleInfo: async (id) => {
    const accessToken =Common.getAccessToken();
    console.log(accessToken);
    return await axios.put(MUNG_HOST + `/sale/detail/${id}`,{},{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
      },
  });
  },

  //회원 구매 내역 조회
  SaleUserList: async () => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    return await axios.get(MUNG_HOST + `/sale/list/email?email=${email}`,{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken,
      }
    });
  },

  // 구매내역 삭제
  SaleDelete: async (id) => {
    const accessToken =Common.getAccessToken();
    return await axios.delete(MUNG_HOST + `/sale/delete/${id}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
    }
    });
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
  DiaryReg: async (diaryDetail, diaryTitle, diaryWriteDate) => {
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
    const DiaryData = {
      diaryDetail: diaryDetail,
      diaryTitle: diaryTitle,
      diaryWriteDate: diaryWriteDate,
      memberId: email,
    };
    return await axios.post(MUNG_HOST + "/diary/new", DiaryData,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  //수행 추가
  QuestReg: async (
    petId,
    quest1,
    quest2,
    quest3,
    quest4,
    quest5,
    day
  ) => {
    const accessToken =Common.getAccessToken();
    const QuestData = {
      petId: petId,
      quest1: quest1,
      quest2: quest2,
      quest3: quest3,
      quest4: quest4,
      quest5: quest5,
      questPerformance: day
    };
    return await axios.post(MUNG_HOST + "/quest/new", QuestData,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
  },

  //수행 출력
  QuestDetail : async (petId,day)=>{
    const accessToken =Common.getAccessToken();
    const QuestDay={
      questPerformance:day,
    }
    return await axios.put(MUNG_HOST + `/quest/detail/${petId}`,QuestDay,{
      headers: {
        "Content-Type": "application/json",
        Authorization : "Bearer " + accessToken,
        }
    });
},

  QuestPetList : async (day)=>{
    const res = await Common.TakenToken(); 
    const email = res.data
    const accessToken =Common.getAccessToken();
  const QuestDay={
    questPerformance:day,
  }
  return await axios.put(MUNG_HOST + `/quest/percent/${email}`,QuestDay,{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken,
      }
  });
},
//일기 작성
DiaryReg : async(day,write)=>{
  const res = await Common.TakenToken(); 
  const email = res.data
  const accessToken =Common.getAccessToken();
  const DiaryData ={
      diaryDetail: write,
      diaryTitle: "",
      diaryWriteDate: day,
      memberId: email,
  }
  return await axios.post(MUNG_HOST + "/diary/new", DiaryData,{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken,
      }
  }); 
},
//일기 출력
DiaryDetail : async (day)=>{
  const res = await Common.TakenToken(); 
  const email = res.data
  const accessToken =Common.getAccessToken();
  return await axios.get(MUNG_HOST + `/diary/detail/${email}/{date}?date=${day}`,{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken,
      }
  });
},

CalenderQuest : async ()=>{
  const res = await Common.TakenToken(); 
  const email = res.data
  const accessToken =Common.getAccessToken();
  return await axios.get(MUNG_HOST + `/diary/Calender/${email}`,{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken, 
      }
  });
},

CalenderDiary : async ()=>{
  const res = await Common.TakenToken(); 
  const email = res.data
  const accessToken =Common.getAccessToken();
  return await axios.put(MUNG_HOST + `/quest/member/percnet/${email}`,{},{
    headers: {
      "Content-Type": "application/json",
      Authorization : "Bearer " + accessToken, 
      }
  });
},
};

export default AxiosApi;