import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Center } from "../../components/PublicStyle";
import { useNavigate } from "react-router-dom";
import ServiceApi from "../../api/ServiceApi";

const ServiceView = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
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
    .item {
      border-bottom: solid 3px #776b5d;
    }
  `;
  useEffect(() => {
    const SList = async () => {
      try {
        const resp = await ServiceApi.oneBoardByMemberEmail();
        console.log("oneBoardByEmail call", resp.data);
        setList(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    SList();
  }, []);

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
          {list.map((data, index) => (
            <div className="item">
              <FaqItem
                key={index}
                question={"[" + data.boardType + "]" + data.comment}
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
