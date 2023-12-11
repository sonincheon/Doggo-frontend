import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Modal from "../../utill/Modal";
import SearchAddr from "../../components/member/SearchAddr";



  const Container = styled.div`
    width:30vw;
    height: 75vh;
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
    font-size: 11px;
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
  border-radius: 12px 0px 0px 12px;
  border-radius: 12px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;

 const Input2 = styled.input`
  
  width: 80%; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 12px 0px 0px 12px; /* iSO 둥근모서리 제거 */
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

  &:disabled {
    opacity: 0.6; /* 비활성화 상태일 때 투명도를 조절하여 흐려지도록 함 */
    cursor: not-allowed; /* 마우스 커서를 바꾸어 사용 불가 상태를 나타냄 */
  }
`;

const Button2 = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    color: white;
    background-color: #776B5D;
    font-size: 10px;
    width: 20%;
    font-weight: 400;
    border-radius: 0px 12px 12px 0px;
    font-weight: 700;
    border: none;
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

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  height: 8%;
  background-color: white;
  border-radius: 12px;
`;

const RadioContainer1 = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  height: 8%;
  background-color: white;
  border-radius: 12px;
`;

const Radio = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-left: 5px;
`;


const SignUp = () => {

  const navigate = useNavigate();

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setPwConfirmMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  const [enroll_company, setEnroll_company] = useState({address:'',});
  const [popup, setPopup] = useState(false);

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
  
    setModalOpen(false);
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeId = (e) => {
    const regexId = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setIdMessage("이메일 형식으로 입력해주세요 (example@email.com)");
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

  const onChangePwConfirm = (e) => {
    const confirmPassword = e.target.value;
    setPwConfirm(confirmPassword);

    if (confirmPassword === inputPw) {
      setPwConfirmMessage("패스워드가 일치합니다.");
      setIsPwConfirm(true);
    } else {
      setPwConfirmMessage("패스워드가 일치하지 않습니다.");
      setIsPwConfirm(false);
    }
  };

  const handleInput = (e) => {
    setEnroll_company({
        // ... => enroll_company에 다 담겠다는 의미
        ...enroll_company,
        [e.target.name]:e.target.value,
    })
    console.log(e.target.name);
}

    // 버튼 클릭 시 팝업
const handleComplete = (data) => {
    setPopup(!popup);
}


  
  return (
  <CenteredContainer>
    <Box>
    <Logo src="https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/test%2FKakaoTalk_20231129_122552306.png?alt=media&token=9646257a-86b4-4bfc-b170-b2163d3ad866"/>
      <Container>
        <Items className="login" style={{marginTop:'20px'}}>
          <span>회원가입</span>
        </Items>
        <Items className="item2" style={{display:'flex'}}>
          <Input2 placeholder="아이디(이메일)" value={inputId} onChange={onChangeId} />
          <Button2>중복체크</Button2>
        </Items>
        <Hint>
          {inputId.length > 0 && (
            <span className={`${isId ? "success" : "error"}`}>{idMessage}</span>
          )}
        </Hint>

        <Items className="item2" style={{display:'flex', marginBottom:'15px'}}>
          <Input2 placeholder="인증번호를 입력해주세요"/>
          <Button2>인증</Button2>
        </Items>

        <Items className="item2">
          <Input type="password" placeholder="패스워드" value={inputPw} onChange={onChangePw} />
        </Items>
        <Hint>
          {inputPw.length > 0 && (
            <span className={`${isPw ? "success" : "error"}`}>{pwMessage}</span>
          )}
        </Hint>

        <Items className="item2">
            <Input type="password" placeholder="패스워드 확인" value={pwConfirm} onChange={onChangePwConfirm} />
          </Items>
          <Hint>
            {pwConfirm.length > 0 && (
              <span className={`${isPwConfirm ? "success" : "error"}`}>{pwConfirmMessage}</span>
            )}
          </Hint>

        <Items className="item2" style={{marginBottom:'15px'}}>
          <Input type="input" placeholder="이름"/>
        </Items>

        <Items className="item2" style={{marginBottom:'20px'}}>
          <Input type="input" placeholder="전화번호"/>
        </Items>

        <RadioContainer className="item2" style={{marginBottom:'20px'}}>
            <div>성별 : </div>
            <Radio>
              <input type="radio"/>
              <Label>남자</Label>
            </Radio>
            
            <Radio>
              <input type="radio"/>
              <Label>여자</Label>
            </Radio>
        </RadioContainer>

        <RadioContainer1 className="item2" style={{marginBottom:'10px'}}>
            <Radio>
              <input type="checkbox"/>
              <Label></Label>
            </Radio>
            <div style={{display:'flex'}}><div style={{marginRight:'8px', color:'#776B5D'}}>(필수)</div> 이용약관 동의</div>
        </RadioContainer1>

        <Items className="address_search"> 
        <Input2 className="user_enroll_text" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
        <Button2 onClick={handleComplete}>주소찾기</Button2>
        {popup && <SearchAddr company={enroll_company} setcompany={setEnroll_company}></SearchAddr>}
        </Items>


          <Button1 style={{marginBottom:'20px'}}>회원가입</Button1>
        </Container>
    </Box>
  </CenteredContainer>

  );
};
export default SignUp;