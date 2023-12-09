import React, { useState } from "react";
import styled from "styled-components";
import { Center } from "../../components/PublicStyle";
import { useNavigate } from "react-router-dom";

const ServiceView = () => {
  const navigate = useNavigate();

  const Container = styled.div`
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 700px;
    .title {
      font-size: 2rem;
    }
  `;
  const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    width: 100%;
    button {
      background-color: #ebe3d5;
      border: none;
      padding: 10px;
      width: 100px;
      border-radius: 10px;
      color: #776b5d;
    }
    .question {
      margin: 10px;
      font-size: 1.2rem;
      word-spacing: 1px;
      font-weight: bold;
    }
    .answer {
      font-size: 1rem;
      word-spacing: 1px;
      line-height: 25px;
    }
  `;
  const faqData = [
    {
      question: "Q [로그인/정보] 아이디와 비밀번호가 기억나지 않아요.",
      answer:
        "로그인 화면에서 아이디 찾기/비밀번호 찾기를 통해 확인 가능합니다. 아이디와 비밀번호 찾기 메뉴를 이용하여 해당 정보를 재설정할 수 있습니다. 이 메뉴를 이용하지 못하는 경우에는 고객센터로 문의하여 도움을 받을 수 있습니다.",
    },
    {
      question:
        "Q [로그인/정보] 다른 방법으로 아이디와 비밀번호를 찾을 수 있는 방법이 있나요?",
      answer:
        "관리자에게 문의해주세요. 관리자는 귀하의 정보를 안전하게 보호하기 위해 노력하고 있습니다.",
    },
    {
      question: "Q [사료문의] 어떤 사료를 주어야 할지 모르겠어요.",
      answer:
        "사료 관련 문의는 전화로 연락 주세요. 사료에 대한 문의는 특별한 이유로 전화 상담을 통해 보다 정확한 도움을 드릴 수 있습니다.",
    },
    {
      question: "Q [사료문의] 사료 구매 시 배송일은 어떻게 되나요?",
      answer:
        "사료 구매 시 배송일은 평균적으로 주문일로부터 2~3일이 소요됩니다. 상세한 배송 일정은 주문 시 안내된 예상 배송 기간을 확인해주세요.",
    },
    {
      question: "Q [이용문의] 회원 등급별 혜택은 어떻게 되나요?",
      answer:
        "회원 등급별 혜택은 등급에 따라 다를 수 있습니다. 자세한 내용은 홈페이지 내 회원 등급 안내를 참고하시기 바랍니다.",
    },
    {
      question: "Q [이용문의] 자주 묻는 질문이 있나요?",
      answer: "이용문의 관련하여 자주 묻는 질문들입니다.",
    },
  ];
  const FaqItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
      <div onClick={() => setShowAnswer(!showAnswer)}>
        <div className="question">{question}</div>
        {showAnswer && <div className="answer">{answer}</div>}
      </div>
    );
  };
  return (
    <Center>
      <Container>
        <Box>
          <div className="title">
            <h1>문의 답변</h1>
            <hr />
          </div>
        </Box>
        <Box>
          {faqData.map((data, index) => (
            <div className="item">
              <FaqItem
                key={index}
                question={data.question}
                answer={data.answer}
              />
            </div>
          ))}
        </Box>
        <Box>
          <button onClick={() => navigate(-1)}>취소하기</button>
        </Box>
      </Container>
    </Center>
  );
};
export default ServiceView;
