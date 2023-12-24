import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import Introduction from "./comps/Introduction";
import AboutUs from "./comps/aboutUs.jsx/AboutUs";
import CurrentLocationIntro from "./comps/currentLocationWeather/CurrentLocationIntro";
import CurrentLocationWeather from "./comps/currentLocationWeather/CurrentLocationWeather";
import RegionWeather from "./comps/regionWeather/RegionWeather";
import Strays from "./comps/Strays";
import CurrentAddressContext from "./CurrentAddressContext";
import Chatbot from "../service/ChatBot";
import ChatBotImg from "../../img/ChatBot.png";





const SectionContainer = styled.section.withConfig({
  className: "section-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.$height || "50vw"};
  background-color: ${(props) => props.$backGround || "white"};
  /* border: 1px solid black; */
`;

const ItemContainer = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.$height || "30%"};
`;

const ChatbotBox = styled.div`
  position: fixed;
  z-index: 1000;
  height: auto;
  top: 19%;
  right: 11%;
  width: 30%;
  min-width: 280px;
  max-width: 450px;
`;

const ChatbotIcon = styled.img`
  position: fixed;
  width: 5.5%;
  max-width: 100px;
  right: 3%;
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
        value={{ currentAddress, setCurrentAddress }}>
        <SectionContainer>
          <ItemContainer $height="100%">
            <Introduction />
          </ItemContainer>
        </SectionContainer>

        <SectionContainer $height="35vw" $backGround="#f2f2f4d1"> 
          <ItemContainer $height="100%">
            <AboutUs/>
          </ItemContainer>
        </SectionContainer>

        <SectionContainer>
          <ItemContainer $height="100%">
            <CurrentLocationIntro />
            <CurrentLocationWeather />
          </ItemContainer>
        </SectionContainer>

        <SectionContainer>
          <ItemContainer>
            <RegionWeather />
          </ItemContainer>
        </SectionContainer>

        <SectionContainer>
          <ItemContainer>
            <Strays />
          </ItemContainer>
        </SectionContainer>

      </CurrentAddressContext.Provider>

      {/* <ChatbotIcon
        src={ChatBotImg}
        onClick={showChatbot ? closeChatbot : toggleChatbot}
      />
      {showChatbot ? (
        <ChatbotBox>
          <Chatbot />
        </ChatbotBox>
      ) : null} */}
      
    </>
  );
};

export default HomeMain;
