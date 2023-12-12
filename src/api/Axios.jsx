import axios from "axios";

const MUNG_HOST = "http://localhost:8111";

const AxiosApi ={
    //로그인
    Login: async (email, pw) => {
        const login = {
          memberEmail: email,
          memberPassword: pw
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
      memberPassword:pw,
      memberTel: tel,
      memberName: name,
      memberAddress: addr,
      memberBirth: birth,
      memberGender: gender
    };
    return await axios.post(MUNG_HOST + `/auth/signup`,userInfo);
  },
  //이메일 샌더
  EmailCert: async (email) => {
    return await axios.post(MUNG_HOST + `/auth/emailConfirm?email=${email}`);
  } ,

//사료 추가
  FeedReg: async (feedImg,feedInfo,feedName,feedPrice,feedType) => {
    const feedData ={
        feedImg: feedImg,
        feedInfo: feedInfo,
        feedName: feedName,
        feedPrice: feedPrice,
        feedType: feedType
    }
    return await axios.post(MUNG_HOST + '/feed/new',feedData);
  },
//판매 추가
  SaleReg: async (feedName,memberId,salesAddr,salesAutoDelivery,salesDelivery,salesPrice,salesRegDate,salesType)=>{
    const saleData={
      feedName: feedName,
      memberId: memberId,
      salesAddr: salesAddr,
      salesAutoDelivery: salesAutoDelivery,
      salesDelivery: salesDelivery,
      salesPrice: salesPrice,
      salesRegDate: salesRegDate,
      salesType: salesType
    }
    return await axios.post(MUNG_HOST + '/sale/new',saleData);
  },
//일기 추가
  DiaryReg: async(diaryDetail,diaryTitle,diaryWriteDate,memberId,)=>{
    const DiaryData={
      diaryDetail: diaryDetail,
      diaryTitle: diaryTitle,
      diaryWriteDate: diaryWriteDate,
      memberId: memberId,
    }
    return await axios.post(MUNG_HOST + '/diary/new',DiaryData);
  },
  
//수행 추가
  QuestReg: async(petId, petImg, petName,quest1,quest2,quest3,quest4,quest5,day)=>{
    const QuestData={
      petId: petId,
      petImg: petImg,
      petName: petName,
      quest1:quest1,
      quest2:quest2,
      quest3:quest3,
      quest4:quest4,
      quest5:quest5,
      questPerformance: day
    }
    return await axios.post(MUNG_HOST + '/quest/new',QuestData); 
  },

}

export default AxiosApi;