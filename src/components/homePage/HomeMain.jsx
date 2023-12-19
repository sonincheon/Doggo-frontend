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
import ChatBotImg from "../../img/ChatBot.png";

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

const ChatbotBox = styled.div`
  position: fixed;
  z-index: 1000;
  height: auto;
  top: 150px;
  right: 150px;
`;

const ChatbotIcon = styled.img`
  position: fixed;
  width: 5.5%;
  right: 50px;
  cursor: pointer;
  z-index: 9999;
  top: 150px;
`;

const HomeMain = () => {
  const [currentAddress, setCurrentAddress] = useState(""); // 상태 정의
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

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

      <ChatbotIcon
        src={ChatBotImg}
        onClick={showChatbot ? closeChatbot : toggleChatbot}
      />
      {showChatbot ? (
        <ChatbotBox>
          <Chatbot />
        </ChatbotBox>
      ) : null}
    </>
  );
};

export default HomeMain;
