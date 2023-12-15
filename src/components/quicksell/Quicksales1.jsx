import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import Modal from "../../utill/Modal";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/Axios";
import Salesmodal from "../../utill/Salesmodal";

const Container = styled.div`
  width: 1000px;
  height: 280px;
  h1 {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 24px;
    width: 100%;
    height: 100px;
    padding-left: 2%;
    font-weight: bold;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 15px;
    width: 100%;
    font-weight: bold;
    padding-left: 1%;
  }
  .canclelist {
    width: 100%;
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
    width: 100%;
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
  width: 98%;
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
  background-color: #000000;
  border-radius: 10px;
  color:white;
  height: 25px;
  border: none;
  cursor: pointer;
  &+&{
    margin: 10px;
  }
`;

const Quicksale1 = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [sModalOpen, setSModalOpen] = useState(false);
  const [saleList,setSaleList] =useState([]);
  const [saleNum,setSaleNum] =useState();

  const closeModal = () => {
    setModalOpen(false);
    setSModalOpen(false);
  };

  const CancleClick = (a)=>{
    setSaleNum(a)
    setModalOpen(true);
  };

  const openSaleModal = (a)=>{
    setSaleNum(a)
    setSModalOpen(true);
  };

const SalesDelete= async()=>{
  const resp = await AxiosApi.SaleDelete(saleNum);
  if (resp.data === true) {
    alert("취소확인")
    setModalOpen(false);
  } else {
    alert("취소실패")
  }
}

const SalesModify= async()=>{
  const resp = await AxiosApi.SaleModify(saleNum);
  if (resp.data === true) {
    alert("변경확인")
    setSModalOpen(false);
  } else {
    alert("변경실패")
  }
}
    useEffect(() => {
        const SalesList = async () => {
          try {
            const resp = await AxiosApi.SaleUserList(window.localStorage.getItem("email")); //전체 조회
            if (resp.status === 200){
              setSaleList(resp.data);
              console.log(resp.data);
            }}catch (e) {
            console.log(e);
          }
        };
        SalesList();
      }, [modalOpen]);
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
            <th style={{ width: "20%" }}>구독명 / 사료명</th>
            <th>배송 예정일</th>
            <th style={{ width: "30%" }}>배송지</th>
            <th>배송상태</th>
            <th style={{ width: "20%" }}> </th>
          </tr>
        </SellTable>
        <ScroolBox>
          <div className="innerStyle">
            <SellTable1>
              {saleList &&
                saleList.map((data, index) => (
                  <tr key={index}>
                    <th>{data.salesRegDate}</th>
                    <th
                      style={{
                        width: "21%",
                      }}
                    >
                      {data.salesName} 버전 구독 /{data.feedName}
                    </th>
                    <th>{data.salesDelivery}</th>
                    <th
                      style={{
                        width: "30%",
                      }}
                    >
                      {data.salesAddr}
                    </th>
                    <th>
                    ????????
                    </th>
                    <th style={{ width: "20%" }}>
                      <CancleButton style={{backgroundColor:"#665847"}} >변경 사항</CancleButton>
                      <CancleButton  onClick={()=>CancleClick(data.saleId)}  >취소</CancleButton>
                    </th>
                  </tr>
                ))}
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
      
      <Modal type={1} open={modalOpen} close={closeModal} confirm={SalesDelete}  header="취소 확인">
                정말 취소 요청 하시겠습니까? 
      </Modal>
      <Salesmodal type={1} open={sModalOpen} close={closeModal} confirm={SalesModify}  header="변경 요청"/>
    </>
  );
};

export default Quicksale1;
