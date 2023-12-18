import axios from "axios";

const MUNG_HOST = "http://localhost:8111";


const AdminAxiosApi = {

  // --- Admin Member
  memberAllList: async () => {
    return await axios.get(MUNG_HOST + `/admin/member/members`);
  },
  memberDelete: async (email) => {
    return await axios.delete(MUNG_HOST + `/admin/member/members/${email}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
  },
    // 판매 페이지 수 조회
    MemberPage: async (page, size) => {
      return await axios.get(
        MUNG_HOST + `/admin/member/count?page=${page}&size=${size}`
      );
    },
    // 판매 페이지네이션 조회
    MemberPageList: async (page, size) => {
      return await axios.get(
        MUNG_HOST + `/admin/member/list/page?page=${page}&size=${size}`
      );
    },


  // --- Admin Sale
  SaleAllList: async () => {
    return await axios.get(MUNG_HOST + `/sale/list/all`);
  },
  InvoiceInput: async (id, invoice) => {
    const InvoiceData = {
      id: id,
      invoice: invoice,
    };
    return await axios.put(MUNG_HOST + `/admin/sales/order/${id}`, InvoiceData)
  },
  // 판매 페이지 수 조회
  SalePage: async (page, size) => {
    return await axios.get(
      MUNG_HOST + `/admin/sales/list/count?page=${page}&size=${size}`
    );
  },
  // 판매 페이지네이션 조회
  SalePageList: async (page, size) => {
    return await axios.get(
      MUNG_HOST + `/admin/sales/list/page?page=${page}&size=${size}`
    );
  },
  
  // ---- Admin Board
  QnaAllList: async () => {
    return await axios.get(MUNG_HOST + `/post/list`);
  },
  // 판매 페이지 수 조회
  QnaPage: async (page, size) => {
    return await axios.get(
      MUNG_HOST + `/admin/qna/count?page=${page}&size=${size}`
    );
  },
  // 판매 페이지네이션 조회
  QnaPageList: async (page, size) => {
    return await axios.get(
      MUNG_HOST + `/admin/qna/list/page?page=${page}&size=${size}`
    );
  },
  QnaDetail: async (id) => {
    return await axios.get(MUNG_HOST + `/admin/qna/detail/${id}`);
  },
  AnswerChange: async (id,answer) => {
    const AnswerData = {
        answer: answer,
    };
    return await axios.put(MUNG_HOST +`/admin/qna/answer/${id}`,AnswerData);
  },


}





export default AdminAxiosApi;