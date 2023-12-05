import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Headers =styled.div`
  position: relative;
  z-index: 110;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #EBE3D5;
`;

const NavBox = styled.div`
  position: relative;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 60px;
  font-weight: 900;
  position: relative;
  left: 0;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 110px;
  height: 70px;
  object-fit: cover;
  margin: 0 10px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

const Menu = styled.p`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    border: 3px solid #f4ce14;
  }
`;

const Contain = styled.div`
  margin: 0 auto;
`;

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 250px;
margin-top: 200px;
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



const Header = () => {
  const navigate = useNavigate();

  return (
    <>
        <Headers >
          <NavBox>
            <Logo />
            <Menus>
              <Menu onClick={() => navigate("/diy")}>멍냥일기</Menu>
              <Menu onClick={() => navigate("/map")}>멍냥이지도</Menu>
              <Menu onClick={() => navigate("/book")}>동물도감</Menu>
              <Menu onClick={() => navigate("/quick")}>정기배송</Menu>
              <Menu onClick={() => navigate("/service")}>고객센터</Menu>
            </Menus>
             <box onClick={() => navigate("/login")}>sign in</box>
             <box onClick={() => navigate("/signup")}>sing up</box>      
             </NavBox>
          </Headers>
          <Contain>
        <main>
          <Outlet />
        </main>
        <Footer>
          <h1>푸터입니다</h1>
        </Footer>
      </Contain>
    </>
  );
};

export default Header;
