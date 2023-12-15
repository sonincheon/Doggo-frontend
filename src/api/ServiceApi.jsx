import axios from "axios";
const MUNG_HOST = "http://localhost:8111";

const ServiceApi = {
  //문의 요청하는 부분 추가를 하기 위해 제출하는거랑 짝
  boardPlus: async (buttonText, comment, boardImg) => {
    const memberEmail = window.localStorage.getItem("email");
    console.log(memberEmail);
    const serviceData = {
      memberEmail: memberEmail,
      boardType: buttonText,
      comment: comment,
      boardImg: boardImg,
    };
    console.log(serviceData);

    return await axios.post(MUNG_HOST + "/post/new", serviceData);
  },
  // 회원별 조회
  oneBoardByMemberEmail: async () => {
    const memberEmail = window.localStorage.getItem("email");

    return await axios.get(MUNG_HOST + `/post/list/${memberEmail}`);
  },
};
export default ServiceApi;
