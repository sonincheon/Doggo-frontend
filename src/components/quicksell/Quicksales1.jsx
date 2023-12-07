import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Modal from "../../utill/Modal";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 1000px;
  height: 280px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 24px;
    width: 500px;
    height: 100px;
    padding-left: 2%;
    font-weight: bold;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 15px;
    width: 200px;
    font-weight: bold;
    padding-left: 1%;
  }
  .canclelist {
    width: 670px;
    font-size: 12px;
    align-items: center;
    padding: 1% 2%;
    li {
      padding: 5px 0;
      list-style: square;
    };
  };
  
  .cancleInfoBox {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 1000px;
    height: 160px;
    background-color: #EBE3D5;
    border-radius: 10px;
  }
`;

const SellTable = styled.table`
  width: 100%;
  border: 1px solid #c1c1c1;
  tr {
    display: flex;
    flex-direction: row;
  }

  th {
    display: flex;
    justify-content: center;
    width: 10%;
    align-items: center;
    justify-content: center;
    height: 30px;
    border: 1px solid #B0A695;
    font-size: 13px;
    font-weight: bold;
    background-color: #B0A695;
  }
`;

const SellTable1 = styled.table`
  width: 1000px;
  tr {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #776B5D;
    border-radius: 10px;
  }

  th {
    display: flex;
    justify-content: center;
    width: 10%;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 10px;
    font-weight: bold;
  }
`;

const ScroolBox = styled.div`
  height: 300px;
  width: 1000px;
  overflow: auto;
  position: relative;
  overflow-y: scroll;
  border: 1px solid #776B5D;
  overflow-x:hidden ;
  .innerStyle {
    width: 1000px;
    height: 650px;
  }
`;

const SellButton = styled.button`
  margin: 20px;
  width: 150px;
  height: 40px;
  background-color: #776B5D;
  color: white;
  border: none;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;
const CancleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #776B5D;
  border-radius: 10px;
  width: 50px;
  height: 25px;
  cursor: pointer;
`;

const Quicksale1 = () => {
const navigate = useNavigate();
  const [sellList, setSellList] = useState("");
  const [cancleOK,setCancleOK] =useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const CancleClick = ()=>{
    setModalOpen(true);

  };

  const ChangePay = (price)=>{
    return Intl.NumberFormat('en-IN').format(price);
  }

  return (
    <>
      <Container>
        <h1>구독 결제 내역 ( 구독 취소 )</h1>
        <div className="cancleInfoBox">
          <h2>※구독 취소시 주의사항※</h2>
          <ul className="canclelist">
            <li>
              ※ 내용
            </li>
            <li>
              ※ 내용
            </li>
            <li>
              ※ 내용
            </li>
            <li>
            내용
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <SellTable>
          <tr>
            <th>시작일자</th>
            <th style={{ width: "40%" }}>구독명</th>
            <th>구독기간</th>
            <th style={{ width: "40%" }}>배송지</th>
            <th>결제 금액</th>
            <th>취소요청</th>
          </tr>
        </SellTable>
        <ScroolBox>
          <div className="innerStyle">
            <SellTable1>
              {/* {sellList &&
                sellList.map((data, index) => (
                  <tr key={index}>
                    <th>{data.i_date}</th>
                    <th
                      style={{
                        width: "40%",
                        justifyContent: "start",
                        paddingLeft: "1%",
                      }}
                    >
                      {data.title}
                    </th>
                    <th>{data.i_date}</th>
                    <th>{data.person}</th>
                    <th>{ChangePay(data.price)}</th>
                    <th>{ChangePay(data.price)}</th>
                    <th>
                      <CancleButton  >취소</CancleButton>
                    </th>
                  </tr>
                ))} */}
            </SellTable1>
          </div>
        </ScroolBox>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}>
          <SellButton Buttonstlye={true} onClick={()=>navigate("/")}>홈으로</SellButton>
        </div>
      </Container>
      <Modal type={1} open={modalOpen} close={closeModal}  header="취소 확인">
                정말 취소 요청 하시겠습니까? 
      </Modal>
    </>
  );
};

export default Quicksale1;
