import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Headers =styled.div`
    position: relative;
    z-index: 30;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #EBE3D5;
    width: 100vw;
`;

const NavBox = styled.div`
  position: relative;
  z-index: 111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 1280px;
  height: 10%;
  left: 0;
`;
const Logo = styled.img`
  display: flex;
  position: relative;
  align-items: center;
  width: 110px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-bottom: 2em;
  border-bottom:1px solid black ;
  align-items: center;
  background-color: white;
  position: sticky;
  z-index: 100;
  top:0;
`;

const Menu = styled.p`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 10%;
  cursor: pointer;
  &::after {
  content: '';
  position: relative;
  top:30%;
  left: 0; /* 시작 위치 설정 - 요소 가운데에서 시작 */
  width: 0;
  height: 5px; /* border-bottom의 선 굵기 */
  background-color: #9d7b54; /* border-bottom의 색상 설정 */
  transition: width 1s ease; /* 애니메이션 속성 설정 */
  transform: translateX(0); /* 시작 위치 조정 */
}
&:hover::after { 
  width: 100%; /* 호버 시, 선이 가로 방향으로 확장되는 애니메이션 */
}
`;

const Contain = styled.div`
  margin: 0 auto;
`;

const Footer = styled.div`
  position: absolute;
  height: 20%;
  width: 100%;
  padding: 0 25px;
  line-height: 60px;
  color: #8a8c8f;
  border-top: 1px solid #dee5e7;
  background-color: #EBE3D5;

.footerBox{
display: flex;
align-items: center;
justify-content: space-between;
width: 1200px;
height: 250px;
font-weight: 200;
position: relative;
left: 0;}
`;

const Main =styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const LogoBox=styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
        <Headers >
          <NavBox>
            <LogoBox>
              <div>뭐넣지</div>
              <Logo onClick={()=>navigate("/")}/>
              <div onClick={()=>navigate("/admin")}>관리자 페이지</div>
            </LogoBox>
            </NavBox>
            </Headers>
            <Menus>
              <Menu onClick={() => navigate("/diy")}>멍냥일기</Menu>
              <Menu onClick={() => navigate("/map")}>멍냥이지도</Menu>
              <Menu onClick={() => navigate("/book")}>동물도감</Menu>
              <Menu onClick={() => navigate("/quick")}>정기배송</Menu>
              <Menu onClick={() => navigate("/service")}>고객센터</Menu>
            </Menus>
          <Contain>
        <Main>
          <Outlet />
        </Main>
        <Footer>
          <h1>푸터입니다</h1>
        </Footer>
      </Contain>
    </>
  );
};

export default Header;
