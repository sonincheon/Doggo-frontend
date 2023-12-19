import React, { useState } from "react";
import styled from "styled-components";
import { Center } from "../../components/PublicStyle";
import { useNavigate } from "react-router-dom";
import ServiceApi from "../../api/ServiceApi";
import { storage } from "../../utill/FireBase";

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

const Box4 = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 5px;
  button {
    color: #f3eeea;
    background-color: #b0a695;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    padding: 10px;
    width: 100px;
  }
`;
const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
`;

const UploadButton = styled.button`
  background-color: #ebe3d5;
  border: none;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  color: #776b5d;

  &:hover {
    background-color: #45a049;
  }
`;
const UserImage = styled.img`
  width: 100px;
  height: 100px;
`;
const ServiceView = () => {
  const [boardType, setBoardType] = useState(""); // 문의 유형 선택값 저장
  const [comment, setComment] = useState(""); // textarea 내용 저장
  const [boardImg, setBoardImg] = useState(""); // 선택된 이미지 저장
  const [buttonText, setButtonText] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
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
  const handleTextareaChange = (e) => {
    const textareaContent = e.target.value;
    setComment(textareaContent); // textarea 내용 저장
    console.log(textareaContent);
  };
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = async () => {
    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      // 파일을 업로드하고 기다립니다.
      await fileRef.put(file);
      console.log("File uploaded successfully!");

      // 다운로드 URL을 가져오고 기다립니다.
      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);

      // 상태를 업데이트합니다.
      setUrl(url);
      setBoardImg(url);
    } catch (error) {
      // 에러를 처리합니다.
      console.error("Upload failed", error);
    }
  };
  const handleSubmit = async () => {
    if (!boardType || !comment) {
      alert("문의 유형과 내용을 모두 작성 해주세요.");
    }
    try {
      const rsp = await ServiceApi.boardPlus(boardType, comment, boardImg);
      if (rsp.data === true) {
        console.log(rsp.data);
        alert("문의 성공");
        navigate(-1);
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Center>
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
            <div
              className="container-button"
              value={boardType}
              onClick={handleButtonClick}
            >
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
            <FileUploadContainer>
              <StyledInput type="file" onChange={handleFileInputChange} />
              <UploadButton onClick={handleUploadClick}>선택</UploadButton>
            </FileUploadContainer>
            {boardImg && <UserImage src={url} alt="uploaded" />}
            <p>사진 경로 : {boardImg}</p>
          </Box2>
        </Box>
        <Box4>
          <button onClick={() => navigate(-1)}>취소하기</button>
          <button onClick={handleSubmit}>저장</button>
        </Box4>
      </Container>
    </Center>
  );
};
export default ServiceView;
