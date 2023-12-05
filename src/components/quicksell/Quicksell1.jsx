import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

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
    color: #776B5D;
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 800px;
  height: 200px;
  border: 2px solid #776B5D;
  border-radius: 10px;
  cursor: pointer;
  .itemInfo {
    width: 500px;
    height: 150px;
    margin-left: 20px;
  }
  h3 {
    font-size: 14px;
    padding-bottom: 5px;
  }
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  h2 {
    display: flex;
    flex-direction: column-reverse;
    height: 80px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const ItemImg = styled.img`
  width: 200px;
  height: 180px;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

const Quicksell1 = () => {
  const navigate = useNavigate();
  const title1 = window.localStorage.getItem("title");
  const itemcode1 = window.localStorage.getItem("itemcode");

  return (
    <>
      <TitleBox>
        <h1>정기구독 하기</h1>
        <h3>구독하여 친구가 되어 드리겠습니다. *^^*</h3>
      </TitleBox>
      <ItemBox onClick={() => navigate("/Goods/info")}>
        <ItemImg
          src="https://cdn.imweb.me/thumbnail/20230217/98d0c75e0162e.png"
          alt="먹이 사진"
        />
        <div className="itemInfo">
          <h1>사료 정보</h1>
          <br />
          <h1>이름 : </h1>
          <br />
          <h3>금액대 : </h3>
          <h3>정보 : </h3>
        </div>
      </ItemBox>
    </>
  );
};

export default Quicksell1;
