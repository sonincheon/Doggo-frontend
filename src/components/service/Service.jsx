import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ServiceApi from "../../api/ServiceApi";
import Servicemodal from "../../utill/Servicemodal";

const Base = styled.div`
  display: flex;
  justify-content: baseline;
  column-gap: 40px;
`;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 700px;
  .title {
    font-size: 2rem;
    hr {
      border-bottom: solid 2px #776b5d;
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
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
    padding: 10px;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
    margin: 10px;
  }
  .item {
    border-bottom: solid 2px #776b5d;
  }
  button {
    background-color: #ebe3d5;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    color: #776b5d;
    border: none;
  }
`;
const Box2 = styled.div`
  display: flex;
  justify-content: center;

  button {
    background-color: #ebe3d5;
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    color: #776b5d;
    border: none;
  }
`;
const faqData = [
  {
    question1: "Q [로그인/정보] 아이디와 비밀번호가 기억나지 않아요.",
    answer1:
      "로그인 화면에서 아이디 찾기/비밀번호 찾기를 통해 확인 가능합니다. 아이디와 비밀번호 찾기 메뉴를 이용하여 해당 정보를 재설정할 수 있습니다. 이 메뉴를 이용하지 못하는 경우에는 고객센터로 문의하여 도움을 받을 수 있습니다.",
  },
  {
    question1:
      "Q [로그인/정보] 다른 방법으로 아이디와 비밀번호를 찾을 수 있는 방법이 있나요?",
    answer1:
      "관리자에게 문의해주세요. 관리자는 귀하의 정보를 안전하게 보호하기 위해 노력하고 있습니다.",
  },
  {
    question1: "Q [사료문의] 어떤 사료를 주어야 할지 모르겠어요.",
    answer1:
      "사료 관련 문의는 전화로 연락 주세요. 사료에 대한 문의는 특별한 이유로 전화 상담을 통해 보다 정확한 도움을 드릴 수 있습니다.",
  },
  {
    question1: "Q [사료문의] 사료 구매 시 배송일은 어떻게 되나요?",
    answer1:
      "사료 구매 시 배송일은 평균적으로 주문일로부터 2~3일이 소요됩니다. 상세한 배송 일정은 주문 시 안내된 예상 배송 기간을 확인해주세요.",
  },
  {
    question1: "Q [이용문의] 회원 등급별 혜택은 어떻게 되나요?",
    answer1:
      "회원 등급별 혜택은 등급에 따라 다를 수 있습니다. 자세한 내용은 홈페이지 내 회원 등급 안내를 참고하시기 바랍니다.",
  },
  {
    question1: "Q [이용문의] 자주 묻는 질문이 있나요?",
    answer1: "이용문의 관련하여 자주 묻는 질문들입니다.",
  },
];

const Service = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [boardType, setBoardType] = useState("");
  const [comment, setComment] = useState("");
  const [boardImg, setBoardImg] = useState("");
  const [id1, setId1] = useState("");
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };
  const openClick = (boardType, comment, boardImg, id) => {
    setModalOpen(true);
    setBoardType(boardType);
    setComment(comment);
    setBoardImg(boardImg);
    setId1(id);
  };
  const [list, setList] = useState([]);

  const SList = async () => {
    try {
      const resp = await ServiceApi.oneBoardByMemberEmail(
        window.localStorage.getItem("email")
      );
      if (resp.status === 200) {
        setList(resp.data);
        console.log(resp.data);
      }
    } catch (e) {
      console.error(e);
      alert("에러 발생");
    }
  };
  useEffect(() => {
    SList();
  }, [modalOpen]);

  // 삭제버튼 boolean
  const onRemove = async (id) => {
    try {
      const rsp = await ServiceApi.boardDel(`${id}`);
      console.log(rsp);
      if (rsp.data === true) {
        console.log(rsp.data);
        alert("삭제 성공");
        SList();
      } else {
        alert("삭제 실패");
      }
    } catch (error) {
      console.log(error);
      console.log(id);
      console.log(list);
    }
  };

  // 여기는 id로 하는거 확실
  const FaqItem = ({ id, question, answer, image }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
      setShowAnswer(!showAnswer);
    };
    return (
      <div onClick={toggleAnswer}>
        <div className="question">{question}</div>
        {image && (
          <img
            src={image}
            alt="이미지"
            style={{ width: "100px", height: "100px" }}
          />
        )}
        {showAnswer && answer ? (
          <div className="answer">{answer}</div>
        ) : (
          <div>
            {!answer && <p>답변이 없습니다.</p>}
            <button onClick={() => openClick(boardType, comment, boardImg, id)}>
              수정
            </button>
            <button onClick={() => onRemove(id)}>삭제</button>
          </div>
        )}
      </div>
    );
  };
  const FaqItem1 = ({ question, answer }) => {
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
      <Box>
        <diiv className="title">
          <h1>고객센터</h1>
          <p>• 작성하기 버튼 누르시면 1:1 상담이 가능합니다.</p>
          <p>• 그 밖에 궁금한 질문은 챗봇으로 확인 가능 합니다.</p>
        </diiv>
      </Box>
      <Base>
        <Container>
          <div className="title">
            <h1>문의 답변</h1>
            <hr />
          </div>
          <Box>
            {list &&
              list.map((list, index) => (
                <div className="item" key={index}>
                  <FaqItem
                    key={index}
                    id={list.boardId}
                    question={`Q [${list.boardType}] ${list.comment} ${list.regData}`}
                    answer={list.answer}
                    image={list.boardImg}
                  />
                </div>
              ))}
          </Box>
          <Box2>
            <button onClick={() => navigate("/serviceVeiw")}>작성</button>
          </Box2>
        </Container>
        <Container>
          <div className="title">
            <h1>FAQ</h1>
            <hr />
          </div>
          <Box>
            {faqData.map((data, index) => (
              <div className="item" key={index}>
                <FaqItem1
                  key={index}
                  question={data.question1}
                  answer={data.answer1}
                />
              </div>
            ))}
          </Box>
        </Container>
      </Base>
      <Servicemodal
        open={modalOpen}
        close={closeModal}
        boardType={boardType}
        comment={comment}
        boardImg={boardImg}
        id={id1}
      ></Servicemodal>
    </>
  );
};
export default Service;
