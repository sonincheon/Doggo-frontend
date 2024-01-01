import React, { useState } from "react";
import styled from "styled-components";
import Introduction from "./comps/Introduction";


import CurrentLocationWeather from "./comps/currentLocationWeather/CurrentLocationWeather";
import RegionWeather from "./comps/regionWeather/RegionWeather";
import Strays from "./comps/Strays";
import CurrentAddressContext from "./CurrentAddressContext";
import Chatbot from "../service/ChatBot";
import ChatBotImg from "../../icon/ChatBot.png";


const SectionContainer = styled.section.withConfig({
  className: "section-container",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.$width || "98vw"};
  height: ${(props) => props.$height || "50vw"};
  background-color: ${(props) => props.$backGround || "white"};
`;

const StraysSectionContainer = styled(SectionContainer)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const IntroductionSection = styled(SectionContainer)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemContainer = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.$height || "30%"};

 
`;

export const DoggyIcon = ({ image, height }) => (
  <div className="doggy-container" style={{ width: height, height: height }}>
    <img src={image} alt="Doggy" className="img" />
  </div>
);

const ChatbotBox = styled.div`
  position: fixed;
  z-index: 1000;
  height: auto;
  bottom: 6%;
  left: 10%;
  width: 20%;
  min-width: 280px;
  max-width: 450px;

  @media (max-width: 1280px) {
    left: 14%; /* 뷰포트 크기가 768px 이하일 때의 값 */
  }
  @media (max-width: 768px) {
    left: 23%; /* 뷰포트 크기가 768px 이하일 때의 값 */
  }
`;

const ChatbotIcon = styled.img`
  position: fixed;
  width: 5%;
  min-width: 66px;
  right: 92%;
  cursor: pointer;
  z-index: 9999;
  top: 87%;

  @media (max-width: 1280px) {
    right: 89%; /* 뷰포트 크기가 768px 이하일 때의 값 */
  }
  @media (max-width: 768px) {
    right: 81%; /* 뷰포트 크기가 768px 이하일 때의 값 */
  }
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
        <IntroductionSection $height="100%">
          <ItemContainer $height="100%">
            <Introduction />
          </ItemContainer>
        </IntroductionSection>
       

        <SectionContainer $height="55vw">
          <ItemContainer $height="100%">
            <CurrentLocationWeather>
              
            </CurrentLocationWeather>
            <RegionWeather>
              
            </RegionWeather>
          </ItemContainer>
        </SectionContainer>

        <StraysSectionContainer $height= "10vw" $width="83vw">
          <ItemContainer $height= "100%">
            <Strays />
          </ItemContainer>
        </StraysSectionContainer>
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
