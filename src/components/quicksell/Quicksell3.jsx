import styled, { css } from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../utill/Modal";
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
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
    width: 600px;
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
  width: 800px;
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
    font-size: 10px;
    font-weight: bold;
  }
`;

const SellButton = styled.button`
  margin: 20px;
  width: 150px;
  height: 40px;
  background-color: #776b5d;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

const Quicksell3 = () => {
  const navigate = useNavigate();
  // const person1 = window.localStorage.getItem("person");
  const title1 = window.localStorage.getItem("title");
  // const price1 =window.localStorage.getItem("price");
  // const price2 = price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // const dateNum =window.localStorage.getItem("select");
  // // 날짜 계산
  // const date11 =new Date(window.localStorage.getItem("date")),
  // oderDate1 = date11.getFullYear() + '년' + (date11.getMonth() + 1) + '월' + date11.getDate() + '일';
  // const date12 =new Date(date11.setDate(date11.getDate() + Number(window.localStorage.getItem("select")))),
  // oderDate2 = date12.getFullYear() + '년' + (date12.getMonth() + 1) + '월' + date12.getDate() + '일';
  // //화폐 단위 변환
  // const Moneys=(number)=>{
  //     number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // }
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <TitleBox>
        <h1>구독 정보</h1>
      </TitleBox>
      <SellTable>
        <tr>
          <th>정기 구독 이름 </th>
          <td> PREMIUM 구독 / (사료명) 01개월</td>
        </tr>
        <tr>
          <th>구독 기간</th>
          <td>2023년 7월 14일 ~ 2023년 7월 14일</td>
        </tr>
        <tr>
          <th>수량</th>
          <td>00 개 </td>
        </tr>
        <tr>
          <th>결제 요금</th>
          <td> 0원 (기본상품가: 원,제세공과금 0원)</td>
        </tr>
        <tr>
          <th>최종 결제 요금</th>
          <td> 0원 (기본상품가: 원,제세공과금 0원)</td>
        </tr>
      </SellTable>
      <TitleBox style={{ height: "200px", marginTop: "0" }}>
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
            여행상품의 특성 상 경우에 따라 예약이 완료된 후에도 처리가 불가능할
            수 있습니다.
          </li>
          <li>
            본 여행상품의 세부 약관 규정은 재경부 고시 소비자 피해보상 규정을
            바탕으로 합니다.
          </li>
        </ul>
      </TitleBox>
      <span>
        <SellButton Buttonstlye={false} onClick={() => navigate(-1)}>
          취소하기
        </SellButton>
        <SellButton Buttonstlye={true} onClick={() => navigate("/quick/toss")}>
          구독하기
        </SellButton>
      </span>

      <Modal open={modalOpen} close={closeModal} header="약관동의 확인">
        약관 동의후 결제 바랍니다.
      </Modal>
    </>
  );
};

export default Quicksell3;
