import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ServiceApi from "../../api/ServiceApi";

const Base = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 50px;
`;
const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
  width: 600px;
  height: 700px;
  .title {
    font-size: 2rem;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  .mini {
    font-size: 20px;
    h2 {
      width: 150px;
      font-size: 1.5rem;
    }
  }
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
      border-radius: 10px;
      border: none;
      font-size: 1rem;
      padding: 10px;

      @media (max-width: 768px) {
        padding: 8px;
        font-size: 0.8rem;
        border-radius: 8px;
      }
    }
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 100%;

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
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;
const Box3 = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: #ebe3d5;
    border: none;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    color: #776b5d;
  }
  img {
    width: 100px;
    height: 100px;
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
const Service = () => {
  const [boardType, setBoardType] = useState(""); // 문의 유형 선택값 저장
  const [comment, setComment] = useState(""); // textarea 내용 저장
  const [boardImg, setBoardImg] = useState(""); // 선택된 이미지 저장
  const imageInput = useRef();
  const [buttonText, setButtonText] = useState("");
  const navigate = useNavigate();

  // 문의 유형 버튼
  const handleButtonClick = (event) => {
    let boardTypeValue = "";
    const buttonText = event.target.innerText;
    switch (buttonText) {
      case "배송":
        boardTypeValue = "DELIVERY";
        break;
      case "주문/결제":
        boardTypeValue = "ORDER";
        break;
      case "취소/교환/환불":
        boardTypeValue = "CANCEL";
        break;
      case "회원정보":
        boardTypeValue = "INFO";
        break;
      case "사료문의":
        boardTypeValue = "CHECK";
        break;
      case "이용문의":
        boardTypeValue = "SERVICE";
        break;
      default:
        break;
    }
    setButtonText(buttonText);
    setBoardType(boardTypeValue);
    console.log(buttonText, boardTypeValue);
  };
  // textarea 내용 변경 시 처리
  const handleTextareaChange = (event) => {
    const textareaContent = event.target.value;
    setComment(textareaContent); // textarea 내용 저장
    console.log(textareaContent);
  };
  const onClickImageUpload = () => {
    imageInput.current.click();
  };
  // 사진 업로드 버튼 클릭 시 처리
  const onChangeImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBoardImg(imageUrl);
    console.log(imageUrl);
  };

  const handleSubmit = async () => {
    if (!boardType || !comment) {
      alert("문의 유형과 내용을 모두 작성 해주세요.");
    }
    try {
      const rsp = await ServiceApi.boardPlus(boardType, comment, boardImg);
      if (rsp.data === true) {
        console.log(rsp);
        alert("문의 성공");
        navigate("/serviceView");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <Box2>
        <h1>1:1 Q & A</h1>
        <p>• 질문이 필요한 유형을 선택하시면 1:1 상담이 가능합니다.</p>
        <p>
          • 1:1 문의 처리 내역은 <Link to="/serviceVeiw">1:1 처리 내역</Link>
          에서 확인 가능합니다.
        </p>
        <p>• 그 밖에 궁금한 질문은 챗봇으로 확인 가능 합니다.</p>
      </Box2>
      <Base>
        <Container>
          <div className="title">
            <h1>문의 작성</h1>
            <hr />
          </div>
          <Box>
            <div className="mini">
              <h2>문의 유형</h2>
            </div>
            <Box2>
              <div className="container-button" onClick={handleButtonClick}>
                <button>배송</button>
                <button>주문/결제</button>
                <button>취소/교환/환불</button>
                <button>회원정보</button>
                <button>사료문의</button>
                <button>이용문의</button>
              </div>
            </Box2>
          </Box>
          <Box>
            <div className="mini">
              <h2>문의 내용</h2>
            </div>
            <Box2>
              <div className="mini">{buttonText}</div>
              <textarea
                onChange={handleTextareaChange}
                rows="10"
                cols="40"
                placeholder="FAQ로 찾을 수 없는 문제가 있을땐, 1:1 문의를 올려주시면, 최대한 빠르고 정확하게 고객님께 답변드리도록 최선을 다하겠습니다."
              ></textarea>
            </Box2>
          </Box>
          <Box>
            <div className="mini">
              <h2>사진</h2>
            </div>
            <Box2>
              <Box3>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={imageInput}
                  onChange={onChangeImage}
                />
                <button onClick={onClickImageUpload}>+</button>
                {boardImg && <img src={boardImg} alt="Uploaded" />}
              </Box3>
            </Box2>
          </Box>
        </Container>
        <Container>
          <div className="title">
            <h1>FAQ</h1>
            <hr />
          </div>
          <Box2>
            {faqData.map((data, index) => (
              <FaqItem
                key={index}
                question={data.question}
                answer={data.answer}
              />
            ))}
          </Box2>
        </Container>
      </Base>
      <Box3>
        <button onClick={handleSubmit}>작성하기</button>
      </Box3>
    </>
  );
};
export default Service;
