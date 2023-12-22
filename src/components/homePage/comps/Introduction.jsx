import React from "react";
import styled from "styled-components";
// import introImage from "../../../img/doggy_kitten.webp";
import backgroundImg from "../../../img/backgroundImg.webp"
const ItemBox = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 1px solid black; */
`;

const Item = styled.div.attrs({
  className: "item-introduction",
})`
  position: relative;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 10px;
`;

const Image = styled.img`
  
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  position: absolute; /* 절대 위치 설정 */
  bottom: 0; /* 아래쪽에 위치 */
  left: 0; /* 왼쪽에서 시작 */
  width: 100%; /* 부모의 전체 너비 */
  padding: 10px 0; /* 상하 여백 */
  /* background-color: rgba(255, 255, 255, 0.5);  */
  color: #333;
  text-align: center;
  margin: 0; /* 기본 마진 제거 */
  font-size: 3.5vw;
`;

const Introduction = (props) => {
  return (
    <>
      <ItemBox>
        <Item>
          <Image src={backgroundImg} alt="Introduction Image"></Image>
          <Text>함께하는 일기, 멍냥멍냥</Text>
        </Item>
      </ItemBox>
    </>
  );
};

export default Introduction;