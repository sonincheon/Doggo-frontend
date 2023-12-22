import styled from "styled-components";

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
  background-color: #f1f500;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:active {
    //확인 클릭하면 설정
    border: #999;
    font-weight: 700;
    background-color: #b3b601;
  }
`;

const SocialKakao = () => {
  const Rest_api_key = "afb202ab4753ffdab4ab8549b0395416"; //REST API KEY
  const redirect_uri = "http://localhost:3000/auth"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <Button2 onClick={handleLogin}>카카오톡 로그인</Button2>
    </>
  );
};
export default SocialKakao;
