import styled, { css } from "styled-components";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../utill/Modal";
import PopupDom from "../member/PopupDom";
import PopupPostCode from "../member/PopupPostCode";
import { PayContext } from "../../context/Paystore";

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 50px;
  margin-top: 50px;
  border-bottom: 2px solid #776b5d;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    display: flex;
    align-items: center;
    padding-top: 20px;
    font-size: 15px;
    font-weight: bold;
  }
  h3 {
    font-size: 12px;
    font-weight: 500;
    padding-left: 20px;
  }
  .title1box1 {
    width: 100%;
    height: 90px;
    font-size: 10px;
    align-items: center;
    font-weight: bold;
    padding: 2% 2%;
    li {
      padding: 5px 0;
      list-style: square;
    }
  }
`;

const SellTable = styled.table`
  width: 100%;
  border: 1px solid #776b5d;

  tr {
    display: flex;
    flex-direction: row;
  }

  th {
    display: flex;
    justify-content: center;
    width: 20%;
    align-items: center;
    justify-content: start;
    padding-left: 2%;
    height: 50px;
    border: 1px solid #776b5d;
    font-size: 14px;
    font-weight: bold;
  }
  td {
    display: flex;
    width: 81%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding-left: 2%;
    height: 50px;
    border: 1px solid #776b5d;
    font-size: 12px;
    font-weight: bold;
  }
  .selected {
    height: 80%;
    width: 40%;
  }
`;

const Button2 = styled.button`
  color: white;
  width: 30%;
  height: 90%;
  border-radius: 10px;
  background-color: #776b5d;
`;

const PostBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .inputBox {
    width: 50%;
  }
  .inputBox1 {
    width: 100%;
  }
`;

const Quicksell3 = (props) => {
  const {feedName, title } = props;
  const [postDetail, setPostDetail] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postNum, setPostNum] = useState("");
  const [post, setPost] = useState("");
  const [dayNum, setDayNum] = useState();
  const [price, setPrice] =useState();
  const context = useContext(PayContext);
  const {setFeedName,setSalesAddr,setSalesAutoDelivery,setSalesDelivery,setSalesPrice,setTitle}=context;



  useEffect(()=>{
    if(title==="ONE MONTH FREE"){setPrice("/")};
    if(title==="STANDARD"){setPrice(99000); props.onPrice(99000);setSalesPrice(99000)};
    if(title==="PREMIUM"){setPrice(129000); props.onPrice(129000);setSalesPrice(129000)};
    setFeedName(feedName); 
    setTitle(title);
    setSalesAddr(post+postDetail+postNum);
    setSalesAutoDelivery(dayNum);
    setSalesDelivery(deliveryDate1);
  },[postNum,post,dayNum,postDetail])

  const openPostCode = () => {
    setIsPopupOpen(true);
  };
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  const onPost = (post) => {
    setPost(post);
  };
  const onPostNum = (num) => {
    setPostNum(num);
  };
  const date11 = new Date(),
    oderDate1 =
      date11.getFullYear() +
      "년" +
      (date11.getMonth() + 1) +
      "월" +
      date11.getDate() +
      "일";

      const deliveryDate =new Date(),
      deliveryDate1 = deliveryDate.getFullYear() + "-"+(deliveryDate.getMonth()+2) + '-' + String(dayNum).padStart(2, '0'); ;

  const ChangePay = (price)=>{
    return Intl.NumberFormat('en-US').format(price);
  }

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const dateArray = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <>
      <TitleBox>
        <h1>구독 정보</h1>
      </TitleBox>
      <SellTable>
        <tr>
          <th>상품명 </th>
          <td> {title} 구독 서비스</td>
        </tr>

        <tr>
          <th>사료 이름</th>
          <td> {feedName} </td>
        </tr>

        <tr>
          <th>구독 시작일</th>
          <td>{oderDate1}</td>
        </tr>

        <tr>
          <th>이름 / 연락처</th>
          <td> 이름 / 연락처</td>
        </tr>

        <tr>
          <th>배송지 </th>
          <td>
            <PostBox>
              <div>
                <input
                  className="inputBox1"
                  type="input"
                  placeholder="주소"
                  value={post}
                />
                <div>
                  <input
                    className="inputBox"
                    type="input"
                    placeholder="우편번호"
                    value={postNum}
                  />
                  <input
                    className="inputBox"
                    type="input"
                    placeholder="상세주소 입력"
                    value={postDetail}
                    onChange={(e) => setPostDetail(e.target.value)}
                  />
                </div>
              </div>
              <Button2 type="button" onClick={openPostCode}>
                주소검색
              </Button2>
            </PostBox>
            <div id="popupDom">
                {isPopupOpen && (
                  <PopupDom>
                    <PopupPostCode
                      onPostNum={onPostNum}
                      onPost={onPost}
                      onClose={closePostCode}
                    />
                  </PopupDom>
                )}
              </div>
          </td>
        </tr>
        <tr>
          <th>정기 배송 일자</th>
          <td>
            <select
              className="selected"
              onChange={(e) => setDayNum(e.target.value)}
              value={dayNum}
              name="선택상자"
            >
              <option value="">정기 배송 일자 입력</option>
              {dateArray.map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>{" "}
          </td>
        </tr>
        <tr>
          <th>정기결제 금액</th>
          <td> {ChangePay(price)}원 (기본상품가: 원,제세공과금 0원)</td>
        </tr>
        <tr>
          <th>최종결제 금액</th>
          <td>  {ChangePay(price)}원 (기본상품가: 원,제세공과금 0원)</td>
        </tr>
      </SellTable>
      <TitleBox style={{ height: "220px", marginTop:"0" }}>
        <h2>취소위약금 및 동의사항</h2>
        <ul className="title1box1">
          <li>
            결제완료 후 예약확정 시 취소 시점에 따라 위약금이 발생할 수
            있습니다.
          </li>
          <li>취소료 규정은 각 상품 상세 페이지에서 확인 가능합니다.</li>
          <li>
            예약이 완료되면 담당자가 전화로 추가 안내 및 확인 절차를 거칩니다.
          </li>
          <li>
            상품의 특성 상 경우에 따라 예약이 완료된 후에도 처리가 불가능할 수
            있습니다.
          </li>
          <li>
            본 상품의 세부 약관 규정은 재경부 고시 소비자 피해보상 규정을
            바탕으로 합니다.
          </li>
        </ul>
      </TitleBox>

      <Modal open={modalOpen} close={closeModal} header="약관동의 확인">
        약관 동의후 결제 바랍니다.
      </Modal>
    </>
  );
};

export default Quicksell3;
