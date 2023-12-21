import axios from "axios";
import Common from "../utill/Common";
const MUNG_HOST = "http://localhost:8111";

const ServiceApi = {
  //문의 요청하는 부분 추가를 하기 위해 제출하는거랑 짝
  boardPlus: async (boardType, comment, boardImg, regData) => {
    const res = await Common.TakenToken();
    const email = res.data;
    const accessToken = Common.getAccessToken();
    const serviceData = {
      memberEmail: email,
      boardType: boardType,
      comment: comment,
      boardImg: boardImg,
      regData: regData,
    };
    console.log(serviceData);

    return await axios.post(MUNG_HOST + "/post/new", serviceData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 회원별 조회
  oneBoardByMemberEmail: async () => {
    const res = await Common.TakenToken();
    const email = res.data;
    const accessToken = Common.getAccessToken();
    return await axios.get(MUNG_HOST + `/post/list/${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 문의 수정
  boardUp: async (id, boardType, comment, boardImg) => {
    console.log(id, boardType, comment, boardImg);
    const res = await Common.TakenToken();
    const email = res.data;
    const accessToken = Common.getAccessToken();
    const boardUpData = {
      memberEmail: email,
      boardType: boardType,
      comment: comment,
      boardImg: boardImg,
    };
    return await axios.put(
      Common.MUNG_HOST + `/post/modify/${id}`,
      boardUpData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
  // 문의 삭제
  boardDel: async (id) => {
    const accessToken = Common.getAccessToken();
    console.log(id);
    return await axios.delete(MUNG_HOST + `/post/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
};
export default ServiceApi;
