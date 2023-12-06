import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../utill/Modal";



  const Container = styled.div`
  width:40vw;
  height: auto;
 
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

 margin: 150px auto;
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
height: 100%;
text-align:right;
  margin-top: 5px;
    font-size: 14px;
`;
const Items = styled.div`
  margin-bottom: 30px;
  &.item1 {
    width: 400px;
    height:100px;

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
    margin-top: 10px;

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
    margin-right: 40px;
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

const Button = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: bold;
  width: 60%; /* 원하는 너비 설정 */
  height: 38px;
  color: white;
  background-color: #776B5D;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  font-weight: 700;

  &:active {
    //확인 클릭하면 설정
    border: #999;
    font-weight: 700;
    background-color: #3C3939;
  }
`;


const Login = () => {

  const navigate = useNavigate();

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
  
    setModalOpen(false);
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeId = (e) => {
    const regexId = /^\w{5,20}$/;
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요.");
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


  
  return (
    <Container>
      
      <Items className="item1">
      </Items>
      <Items className="login">
        <span>로그인</span>
      </Items>
      <Items className="item2">
        <Input placeholder="아이디" value={inputId} onChange={onChangeId} />
      </Items>

      <Hint>
        {inputId.length > 0 && (
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
   
      <Button disabled={false} >확 인</Button>

         <Button enbled >취 소</Button>
      <Modal open={modalOpen} close={closeModal} header="오류">
         아이디 및 패스워드를 확인해 주세요.
       </Modal>
       <Items className="item3">
       {/* <Items className="signin">
         <Link to="/Signup" className="link_style">
         <span>아이디 찾기</span>
         </Link>
      </Items> */}
      <Items className="signup">
         <Link to="/Signup" className="link_style">
         <span>회원가입</span>
         
        </Link>
      </Items>
      </Items>
    </Container>
  );
};
export default Login;