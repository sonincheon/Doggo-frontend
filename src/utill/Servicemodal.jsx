import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "./FireBase";
import ServiceApi from "../api/ServiceApi";

const ModalStyle = styled.div`
  /* 모달 기본 스타일 */
  .modal {
    display: none; // 초기에는 숨김
    position: fixed; // 스크롤에 따라 움직이지 않음
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99; // 다른 모달보다 위에 위치
    background-color: rgba(0, 0, 0, 0.6); // 배경색 및 투명도 조절
    // 테두리 추가
  }

  /* 모달이 열릴 때의 스타일 */
  .openModal {
    display: flex; // 모달이 보이도록 함
    align-items: center;
    animation: modal-bg-show 0.8s; // 배경이 스르륵 열리는 효과
    border: 1px solid black;
    // 테두리 추가
  }

  /* 닫기 버튼 스타일 */
  button {
    outline: none;
    cursor: pointer;
    margin-right: 10px;
    border: 0;
    // 테두리 추가
  }

  /* 모달 컨텐츠 스타일 */
  section {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: white;
    animation: modal-show 0.3s; // 모달이 스르륵 열리는 효과
    overflow: hidden;
    // 테두리 추가
  }

  /* 모달 헤더 스타일 */
  section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #776b5d;
    color: white;
    font-weight: 700;
    // 테두리 추가
  }

  /* 모달 닫기 버튼 스타일 */
  section > header button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: white;
    background-color: transparent;
    // 테두리 추가
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
    // 테두리 추가
  }

  /* 모달 푸터 스타일 */
  section > footer {
    justify-content: flex-end;
    column-gap: 5px;
    // 테두리 추가
  }

  /* 모달 버튼 스타일 */
  section > footer button {
    color: #f3eeea;
    background-color: #b0a695;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    padding: 10px;
    width: 100px;
  }

  /* 모달 열릴 때의 애니메이션 효과 */
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
      // 테두리 추가
    }
    to {
      opacity: 1;
      margin-top: 0;
      // 테두리 추가
    }
  }

  /* 모달 배경 열릴 때의 애니메이션 효과 */
  @keyframes modal-bg-show {
    from {
      opacity: 0;
      // 테두리 추가
    }
    to {
      opacity: 1;
      // 테두리 추가
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

const Servicemodal = (props) => {
  const { open, close, id } = props;
  const [buttonText, setButtonText] = useState("");
  const [BoardImg, setBoardImg] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [boardType, setBoardType] = useState(""); // 문의 유형 선택값 저장
  const [comment, setComment] = useState(""); // textarea 내용 저장

  const handleButtonClick = (e) => {
    let boardTypeValue = "";
    const buttonText = e.target.innerText;
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
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleTextareaChange = (e) => {
    setComment(e.target.value); // textarea 내용 저장
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
      console.error(error);
    }
  };
  const Close = () => {
    setFile("");
    setBoardType("");
    setComment("");
    setBoardImg("");
    close();
  };

  const navigate = useNavigate();

  // 수정버튼 boolean
  const boardUp = async () => {
    try {
      console.log(id, boardType, comment, BoardImg);
      const rsp = await ServiceApi.boardUp(id, boardType, comment, BoardImg);
      if (rsp.data === true) {
        alert("수정성공");
        navigate("/service");
        close();
      } else {
        alert("수정실패");
        console.log(rsp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalStyle>
      <div className={open ? "openModal modal" : "modal"}>
        {open && (
          <section>
            <header>1 : 1 문의 변경</header>
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
                  value={comment}
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
                {url && <UserImage src={url} alt="uploaded" />}
                <p>사진 경로 : {url}</p>
              </Box2>
            </Box>
            <footer>
              <button onClick={boardUp}>저장</button>
              <button onClick={Close}>취소</button>
            </footer>
          </section>
        )}
      </div>
    </ModalStyle>
  );
};
export default Servicemodal;
