import axios from "axios";

const MUNG_HOST = "http://localhost:8111";

const AxiosApi ={
    //로그인
    Login: async (id, pw) => {
        const login = {
          id: id,
          pwd: pw,
        };
        return await axios.post(MUNG_HOST + "/auth/login", login);
      },
      //회원가입 
        // 회원가입시 아이디 체크
  SingupIdCheck: async (id) => {
    return await axios.get(MUNG_HOST + `/auth/exists/?id=${id}`);
  },

  // 회원가입 inselrt
  Signup: async (id,nick,pwd,name,addr,phone,email) => {
    const userInfo = {
      id: id,
      nick:nick,
      pwd: pwd,
      name: name,
      addr:addr,
      phone:phone,
      email: email,
    };
    return await axios.post(MUNG_HOST + `/auth/signup`,userInfo);
  },

}

export default AxiosApi;