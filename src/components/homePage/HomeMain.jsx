import React, { useState } from "react";
import styled from "styled-components";

import { useInView } from "react-intersection-observer";


import Introduction from "./comps/Introduction";
import UserStatus from "./comps/UserStatus";
import CurrentLocationWeather from "./comps/currentLocationWeather/CurrentLocationWeather";
import RegionWeather from "./comps/regionWeather/RegionWeather";
import Strays from "./comps/Strays";
import CurrentAddressContext from "./CurrentAddressContext";
import Chatbot from "../service/ChatBot";

const fadeIn = `
  opacity: 1;
  transform: translateY(0px);
`;

const fadeOut = `
  opacity: 0;
  transform: translateY(30px);
`;

const SectionContainer = styled.section.withConfig({
  className: "section-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vw;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border: 1px solid black;
`;

const ItemContainer = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  width: 80%;
  height: ${(props) => props.$height || "30%"};
`;

// 새로운 스타일 추가
const ChatbotContainer = styled.div`
  position: fixed;
  top: 150px; /* 헤더 바로 아래에 고정하려면 헤더의 높이에 맞게 조절해주세요 */
  right: 20px;
  z-index: 1000; /* 다른 컴포넌트 위에 나타나도록 조절 */
`;


const HomeMain = () => {
  const [currentAddress, setCurrentAddress] = useState(""); // 상태 정의



  return (
    <>
      <CurrentAddressContext.Provider
        value={{ currentAddress, setCurrentAddress }}
      >
        <SectionContainer>
          <ItemContainer>
            <Introduction />
            <UserStatus />
          </ItemContainer>
          <ItemContainer $height="40%">
            <CurrentLocationWeather />
            <RegionWeather />
          </ItemContainer>
          <ItemContainer>
            <Strays></Strays>
          </ItemContainer>
        </SectionContainer>
      </CurrentAddressContext.Provider>

      {/* Chatbot을 새로운 컨테이너에 추가 */}
      <ChatbotContainer>
        <Chatbot />
      </ChatbotContainer>
    </>
  );
};

export default HomeMain;
