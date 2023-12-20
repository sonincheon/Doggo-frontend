import axios from "axios";
const MUNG_HOST = "http://localhost:8111";

const ServiceApi = {
  //문의 요청하는 부분 추가를 하기 위해 제출하는거랑 짝
  boardPlus: async (boardType, comment, boardImg, regData) => {
    const memberEmail = window.localStorage.getItem("email");
    console.log(memberEmail);
    const serviceData = {
      memberEmail: memberEmail,
      boardType: boardType,
      comment: comment,
      boardImg: boardImg,
      regData: regData,
    };
    console.log(serviceData);

    return await axios.post(MUNG_HOST + "/post/new", serviceData);
  },
  // 회원별 조회
  oneBoardByMemberEmail: async () => {
    const memberEmail = window.localStorage.getItem("email");

    return await axios.get(MUNG_HOST + `/post/list/${memberEmail}`);
  },
  // 문의 수정
  boardUp: async (id, boardType, comment, boardImg) => {
    console.log(id, boardType, comment, boardImg);
    const boardUpData = {
      boardType: boardType,
      comment: comment,
      boardImg: boardImg,
    };
    return await axios.put(MUNG_HOST + `/post/modify/${id}`, boardUpData);
  },
  // 문의 삭제
  boardDel: async (id) => {
    console.log(id);

    return await axios.delete(MUNG_HOST + `/post/delete/${id}`);
  },
};
export default ServiceApi;
