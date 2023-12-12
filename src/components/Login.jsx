import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../utill/Modal";
import AxiosApi from "../../src/api/Axios";



  const Container = styled.div`
    width:30vw;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #F3EEEA;
    border-radius: 10px;

  & .login {
    
      margin: 0 auto;
  
      font: normal normal bold 24px/35px Poppins;
      letter-spacing: 0px;
      color:black;
      opacity: 1;
    }
    .success {
      color: green;
    }
    .error {
      color: red;
    }
  `;
const Hint = styled.div`
    width: 60%;
    height: 2.5%;
    text-align:right;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const Items = styled.div`
  margin-bottom: 30px;
  &.item1 {
    width: 400px;
    height: 50px;

    img{
        width: 100%;
    }
  }
  &.item2 {
    width: 60%;
    margin: 8px auto;
    
  
  }
  &.item3 {
    width:50%;
    margin-top: 20px;
    justify-content: center;
    color: red;
    font-size: 14px;
    display: flex;
    
  }
  &.hint {
  
  }
    

  &.signup{
    justify-content: right;
    font-weight: 700px;
    font-size: 14px;   
    .link_style {
      color: #000000;
      text-decoration-line: none;
    }
  }
  &.signin{
    justify-content: right; 
    font-weight: 700px;
    margin-right: 30px;
    font-size: 14px;

    .link_style {
      color: #000000;
      text-decoration-line: none;
    }
}
`;

 const Input = styled.input`
  
  width: 100%; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 12px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;

const Button1 = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: bold;
  width: 60%; /* 원하는 너비 설정 */
  height: 55px;
  color: white;
  background-color: #776B5D;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  font-weight: 700;
  border: none;

  &:active {
    //확인 클릭하면 설정
    border: #999;
    font-weight: 700;
    background-color: #3C3939;
  }
`;

const Button2 = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: bold;
  width: 60%; /* 원하는 너비 설정 */
  height: 55px;
  color: black;
  background-color: #FAFF00;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  font-weight: 700;
  border: none;

  &:active {
    //확인 클릭하면 설정
    border: #999;
    font-weight: 700;
    background-color: #a0a300;
  }
`;

const Box = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBE3D5;
    flex-direction: column;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
    width: 10vw;
    height: 10vw;
`;


const Login = () => {

  const navigate = useNavigate();

  // 키보드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  const [modalContent, setModalContent] = useState("");

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
  
    setModalOpen(false);
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setIdMessage("이메일 형식이 올바르지 않습니다.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.");
      setIsId(true);
    }
  };
  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("");
      setIsPw(true);
    }
  };

  const onClickLogin = async () => {
    //로그인을 위한 axios 호출
    try {
      const res = await AxiosApi.Login(inputEmail, inputPw);
      console.log(res.data);
      if (res.data.grantType === "Bearer") {
        navigate("/");
      } else {
        setModalOpen(true);
        setModalContent("아이디 및 패스워드를 재확인해 주세요.^^");
      }
    } catch (err) {
      console.log(err);
      setModalOpen(true);
      setModalContent("아이디 및 패스워드를 재확인해 주세요.^^");
    }
  };



  
  return (
  <CenteredContainer>
    <Box>
    <Logo src="https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/test%2FKakaoTalk_20231129_122552306.png?alt=media&token=9646257a-86b4-4bfc-b170-b2163d3ad866"/>
      <Container>
        <Items className="item1">
        </Items>
        <Items className="login">
          <span>로그인</span>
        </Items>
        <Items className="item2">
          <Input placeholder="아이디" value={inputEmail} onChange={onChangeEmail} />
        </Items>

        <Hint>
          {inputEmail.length > 0 && (
            <span className={`${isId ? "success" : "error"}`}>{idMessage}</span>
          )}
        </Hint>

        <Items className="item2">
          <Input type="password" placeholder="패스워드" value={inputPw} onChange={onChangePw} />
        </Items>
        <Hint>
          {inputPw.length > 0 && (
            <span className={`${isPw ? "success" : "error"}`}>{pwMessage}</span>
          )}
        </Hint>
    
        <Button1 onClick={onClickLogin}>로그인</Button1>
        <Button2>카카오톡 로그인</Button2>

        <Modal open={modalOpen} close={closeModal} header="오류">
          아이디 및 패스워드를 확인해 주세요.
        </Modal>
        <Items className="item3">
        <Items className="signin">
          <Link to="/Signup" className="link_style">
          <span>아이디 찾기</span>
          </Link>
        </Items>
        <Items className="signin">
          <Link to="/Signup" className="link_style">
          <span>비밀번호 찾기</span>
          </Link>
        </Items>
        <Items className="signup">
          <Link to="/signup" className="link_style">
          <span>회원가입</span>
          </Link>
        </Items>
        </Items>
      </Container>
    </Box>
  </CenteredContainer>

  );
};
export default Login;