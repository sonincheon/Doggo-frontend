import styled from "styled-components";
import { ReactComponent as QrcodeImg } from "../../img/qr코드.svg";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
  }
  h3 {
    padding: 15px;
    font-size: 12px;
    font-weight: bold;
    color: gray;
  }
`;
const TitleBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  height: 220px;
  border-top: 2px solid grey;
  h1 {
    display: flex;
    align-items: center;
    padding: 3% 3%;
  }
  h2 {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 800;
    width: 30%;
  }
  h3 {
    font-size: 12px;
    font-weight: bold;
    padding-left: 20px;
  }
`;

const SellButton = styled.button`
  margin: 20px;
  width: 150px;
  height: 40px;
  background-color: #776b5d;
  color: white;
  border: 0;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
`;

const Quicksucess1 = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const ChangePay = (price)=>{
    return Intl.NumberFormat('en-US').format(price);
  }

  return (
    <>
      <TitleBox>
        <h1>결제가 완료되었습니다.</h1>
        <h3>
          {" "}
          구독 서비스 결제 감사합니다 . 최선을 다하는 멍냥멍냥이 되겠습니다.
        </h3>
        <h3>{searchParams.get("paymentKey")}</h3>
      </TitleBox>
      <TitleBox1>
        <h1>
          <h2>결제수단</h2>
          <h3>카드 결제 / 카카오페이</h3>
        </h1>
        <h1>
          <h2>결제하신 금액 </h2>
          <h3>{ChangePay(searchParams.get("amount"))}원 </h3>
        </h1>
      </TitleBox1>
      <TitleBox1 style={{ borderBottom: "2px solid grey" }}>
        <h1>
          <h2>구독명</h2>
          <h3>PREMIUM 구독 / (사료명)</h3>
        </h1>
        <h1>
          <h2>배송지</h2>
          <h3>관악구 신림동 신사로 12길 </h3>
        </h1>
        <h1>
          <h2>배송일자</h2>
          <h3>2023년 7월 14일</h3>
        </h1>
      </TitleBox1>
      <QrcodeImg />
      <div>
        <SellButton onClick={() => navigate("/")}>홈으로</SellButton>
        <SellButton onClick={() => navigate("/quick/sales")}>
          구매내역
        </SellButton>
      </div>
    </>
  );
};

export default Quicksucess1;
