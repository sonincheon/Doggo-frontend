import React, { useRef, useState } from "react";
import styled from "styled-components";

const Service = () => {
  const [text, setText] = useState(""); // 문의 유형 선택값 저장
  const imageInput = useRef();

  const Base = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const Container = styled.div`
    height: auto;
  `;
  const Box = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
    .container-button {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      row-gap: 5px;
      column-gap: 5px;
      padding: 10px;

      button {
        color: #f3eeea;
        background-color: #b0a695;
        padding: 10px;
        border-radius: 10px;
        border: none;
        @media (max-width: 768px) {
          padding: 8px;
        }
      }
    }
    button {
      background-color: #ebe3d5;
      border: none;
      padding: 10px;
    }
  `;

  const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    flex-grow: 2;
    button {
      width: 55px;
      height: 55px;
    }
  `;
  const Box3 = styled.div`
    display: flex;
    flex-direction: column;
    FaqItem {
      border: 1px solid black;
    }
  `;

  // 문의 유형 버튼
  const handleButtonClick = (event) => {
    const buttonText = event.target.innerText;
    setText(buttonText);
  };
  const onCickImageUpload = () => {
    imageInput.current.click();
  };
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
        <div>{question}</div>
        {showAnswer && <div>{answer}</div>}
      </div>
    );
  };
  return (
    <Base>
      <Container>
        <h1>문의 작성</h1>
        <hr />
        <Box>
          <h2>문의 유형</h2>
          <div className="container-button" onClick={handleButtonClick}>
            <button>배송</button>
            <button>주문/결제</button>
            <button>취소/교환/환불</button>
            <button>회원정보</button>
            <button>사료문의</button>
            <button>이용문의</button>
          </div>
        </Box>
        <Box>
          <h2>문의 내용</h2>
          <Box2>
            {text}
            <textarea
              rows="5"
              placeholder="FAQ로 찾을 수 없는 문제가 있을땐, 1:1 문의를 올려주시면, 최대한 빠르고 정확하게 고객님께 답변드리도록 최선을 다하겠습니다."
            ></textarea>
          </Box2>
        </Box>
        <Box>
          <h2>사진</h2>
          <Box2>
            <input type="file" style={{ display: "none" }} ref={imageInput} />
            <button onClick={onCickImageUpload}>+</button>
          </Box2>
        </Box>
      </Container>
      <Container>
        <h1>FAQ</h1>
        <hr />
        <Box3>
          {faqData.map((data, index) => (
            <FaqItem
              key={index}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </Box3>
      </Container>
    </Base>
  );
};
export default Service;
