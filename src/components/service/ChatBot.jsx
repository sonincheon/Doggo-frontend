import React, { useState, useRef } from "react";
import styled from "styled-components";

// 전체 컨테이너에 대한 스타일드 컴포넌트
const Container = styled.div`
  width: 400px;
  height: 500px;
  .chat {
    background-color: #f3eeea;
    overflow: hidden;
    border-radius: 8px;
  }
`;

// 채팅 메시지와 스크롤바가 있는 컨테이너에 대한 스타일드 컴포넌트
const ChatboxContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 8px;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #4caf50 #f1f1f1;

  /* 스크롤바에 대한 일반적인 스타일을 설정합니다. */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4caf50;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: lightgray;
  }
`;

// 입력 필드와 전송 버튼이 있는 컨테이너에 대한 스타일드 컴포넌트
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

// 입력 필드에 대한 스타일드 컴포넌트
const Input = styled.input`
  width: calc(100% - 60px);
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
`;

// 전송 버튼에 대한 스타일드 컴포넌트
const SendButton = styled.button`
  width: 45px;
  height: 25px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

const BotMessage = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  text-align: left;
  justify-items: start;
`;
const Boxleft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`;

const UserMessage = styled.div`
  background-color: #4caf50;
  border-radius: 8px;
  padding: 8px;
  margin: 4px;
  text-align: right;
`;

const Boxright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px; /* 이미지에 원하는 모양을 주기 위한 스타일 설정 */
`;

const Chatbot = () => {
  // 채팅창 메시지와 사용자 입력 상태를 관리하는 상태변수
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const animal = [
    {
      name: "치와와",
      size: "15cm~20cm",
      explain: "졸귀탱 강아지",
      img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/%EA%B0%95%EC%95%84%EC%A7%80%20%EC%82%AC%EC%A7%84%2F%EC%B9%98%EC%99%80%EC%99%80.jpg?alt=media&token=83eee3ab-9fa3-443b-9769-2d4e9961ac7f",
      url: "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%B9%98%EC%99%80%EC%99%80&oquery=%EC%8B%9C%EB%B0%94%EA%B2%AC&tqi=iT7LOwqVOsVsshWcUb8ssssstEs-078421",
    },
    {
      name: "시바",
      size: "15cm~20cm",
      explain: "귀여운 강아지",
      img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/%EA%B0%95%EC%95%84%EC%A7%80%20%EC%82%AC%EC%A7%84%2F%EC%8B%9C%EB%B0%94%EA%B2%AC.jpg?alt=media&token=b914c777-c6bb-4ee0-9d40-7f0e810f9317",
      url: "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%8B%9C%EB%B0%94%EA%B2%AC",
    },
  ];

  // 채팅창을 스크롤하기 위한 ref
  const chatContainerRef = useRef(null);

  // 사용자 입력 메시지를 메시지 목록에 추가하는 함수
  const addMessage = (text, sender = "user") => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  // 사용자 입력이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // 사용자가 메시지를 보낼 때 호출되는 함수
  const handleSendMessage = () => {
    if (inputText.trim() === "") return;

    // 사용자가 입력한 메시지를 채팅창에 추가
    addMessage(inputText, "user");

    // 사용자 입력을 처리하고 챗봇 응답 생성
    const botResponse = generateBotResponse(inputText);

    // 챗봇 응답을 채팅창에 추가
    addMessage(botResponse, "bot");

    // 입력창 초기화
    setInputText("");
  };

  // 사용자가 버튼을 클릭했을 때 호출되는 함수
  const handleButtonClick = (url) => {
    // 새로운 창으로 링크 열기 (여기서는 네이버로 이동하는 예시)
    window.location.href = url;
  };

  // 챗봇 응답 생성 함수
  const generateBotResponse = (userInput) => {
    // 간단한 패턴 매칭을 통해 사용자 입력에 따른 응답 생성
    const lowercaseInput = userInput.toLowerCase();

    const ButtonBox = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: end;
    `;

    const MoreButton = styled.button`
      display: flex;
      width: auto;
      padding: 5px 10px;
      background-color: #4caf50; /* 녹색으로 변경 */
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    `;

    const foundAnimal = animal.find((a) =>
      lowercaseInput.includes(a.name.toLowerCase())
    );

    if (foundAnimal) {
      // '치와와'에 대한 정보와 버튼을 포함한 응답 생성
      return (
        <chat1>
          {foundAnimal.name}에 관한 정보입니다.
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Image src={foundAnimal.img} alt={foundAnimal.name} />
            </li>
            <li>크기: {foundAnimal.size}</li>
            <li>설명: {foundAnimal.explain}</li>
          </ul>
          <ButtonBox>
            <MoreButton onClick={() => handleButtonClick(foundAnimal.url)}>
              {foundAnimal.name} 정보 보기
            </MoreButton>
          </ButtonBox>
        </chat1>
      );
    } else {
      return "죄송해요, 이해하지 못했어요. 다시 한번 설명해주시겠어요?";
    }
  };

  // 렌더링
  return (
    <Container>
      <div className="chat">
        <ChatboxContainer ref={chatContainerRef}>
          {messages.map((message, index) => (
            <div key={index} style={{ paddingBottom: "8px" }}>
              {message.sender === "bot" ? (
                <Boxleft>
                  <BotMessage>
                    <strong>동물박사:</strong> {message.text}
                  </BotMessage>
                </Boxleft>
              ) : (
                <Boxright>
                  <UserMessage>
                    <strong>사용자:</strong>
                    {message.text}
                  </UserMessage>
                </Boxright>
              )}
            </div>
          ))}
        </ChatboxContainer>
        <InputContainer>
          <Input
            className="chatbox"
            placeholder="궁금한 정보를 자유롭게 물어보세요"
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
          <SendButton className="sendbtn" onClick={handleSendMessage}>
            전송
          </SendButton>
        </InputContainer>
      </div>
    </Container>
  );
};

export default Chatbot;
