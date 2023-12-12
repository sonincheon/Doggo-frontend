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

  EmailCert: async (email) => {
    return await axios.post(MUNG_HOST + `/auth/emailConfirm?email=${email}`);
  }
}

export default AxiosApi;