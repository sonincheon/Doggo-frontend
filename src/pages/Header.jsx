import { Outlet, useNavigate } from "react-router-dom";
import styled,{ keyframes } from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

const Container=styled.div`
  width: 100vw;
  height: 100%;
`;


const Headers =styled.div`
    position: sticky;
    top:0;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    width: 100vw;
    background-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};
    backdrop-filter: ${({ isHovered }) => (isHovered ? 'none' : 'blur(5px)')};
    transition: background-color 0.1s ease;
    @media (max-width: 768px) {
     
    }
`;

const NavBox = styled.div`
  position: relative;
  z-index: 111;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 10%;
  font-weight: bold;
  left: 0;
  
    .icons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 150px;
    @media (max-width: 768px) {
      width: 50px;
    }
  }
  .icon{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 33%;
    cursor: pointer;
    font-weight: bold;
    font-size: 11px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .listIcon{
    display: none;
    height: 45px;
    width: 33%;
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    @media (max-width: 768px) {
      display: flex;
      
    }
  }
  .none{
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin-bottom: 1em;
    }
`;
const Logo = styled.img`
  width: 110px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  visibility: ${({ isHovered }) => (isHovered ? 'visible' : 'hidden')};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1em;
  box-shadow: ${({ isHovered }) => (isHovered ? '0px 0px 20px #dadada' : 'none')};
  align-items: center;
  background-color: ${({ isHovered }) => (isHovered ? 'white' : 'transparent')};
  position: sticky;
  transition: all 0.1s ease;
  top:70px;
  z-index: 100;
  @media (max-width: 1280px) {
      font-size: 11px;
    }
  @media (max-width: 768px) {
      display: none;
    }
`;

const Menu = styled.p`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 8%;
  cursor: pointer;
  &:hover{
    border-bottom:3px solid black ;
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
  background-color: #000000;
`;
const Main =styled.div`
  max-width:  80%;
  padding-bottom: 2%;
  margin: 0 auto;
`;
const slideFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const List=styled.div`
    position: fixed;
    top:0;
    z-index: 220;
    display: ${(props) => (props.isList ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #ffffff;
    width: 100vw;
    height: 100%;
    animation: ${slideFromLeft} 0.3s ease-in-out forwards;
    @media (min-width: 768px) {
     display: none;
    }
    .out{
      display: flex;
      cursor: pointer;
    }
    .list{
      padding: 20px;
      position: absolute;
      top:0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .list1{
      display: flex;
      height: 12%;
      width: 80%;
      margin-bottom: 1%;
      box-shadow: 1px 1px 3px black;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      font-size: 1.2em;
      cursor: pointer;
      &:hover{
        box-shadow: 1px 1px 3px #bbc787;
      }
    }
    .list2{
      display: flex;
      height: 5%;
      width: 60%;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      font-size: 0.8em;
    }
    .icon{
      cursor: pointer;
    }
`;

const Header = () => {
  const navigate = useNavigate();
  const [openList,setOpenList] =useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const clickList =()=>{
    setOpenList(true);
  }
  const ListDown =()=>{
    setOpenList(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 20) {
        setIsHeaderHovered(false);
      } else {
        setIsHeaderHovered(true);
      }
    };
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpenList(false);
      }
    };
  

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('scroll', handleScroll);
                  window.removeEventListener('resize', handleResize);
                  }
  }, []);



  return (
    <Container>
        <Headers onMouseEnter={() => setIsHeaderHovered(true)} onMouseLeave={() => setIsHeaderHovered(false)} isHovered={isHeaderHovered} >
          <NavBox>
            <div className="none" onClick={()=>navigate("/admin")}>관리자</div>
              <Logo onClick={()=>navigate("/")}/>
            <div className="icons">
              <div className="icon" onClick={() => navigate("/login")}><LoginIcon/><p>LOGIN</p></div>
              <div className="icon" onClick={() => navigate("/signup")}><PersonAddAltOutlinedIcon/><p>SIGN UP</p></div>
              <div className="icon" onClick={() => navigate("/mypage")}><PermIdentityOutlinedIcon/><p>MYPAGE</p></div>
              <div className="listIcon" onClick={()=>clickList()}><MenuOutlinedIcon sx={{ fontSize: 35 }}/></div>
            </div>
          </NavBox>
        </Headers>
        <List isList={openList} onClick={ListDown}>
          <div className="list" >
            <Logo onClick={()=>navigate("/")}/>
            <div className="out" onClick={ListDown}><CloseIcon sx={{ fontSize: 35 }}/></div>
          </div>
          <div className="list1" onClick={() => navigate("/diy")}>PET'S DIARY</div>
          <div className="list1" onClick={() => navigate("/map")}>MAPS</div>
          <div className="list1" onClick={() => navigate("/book")}>PET'S BOOKS</div>
          <div className="list1" onClick={() => navigate("/quick")}>정기 구독</div>
          <div className="list1" onClick={() => navigate("/service")}>고객지원 Q&A</div>
          <div className="list2">
          <div className="icon" onClick={() => navigate("/login")}><p>LOGIN</p></div>
          <div className="icon" onClick={() => navigate("/signup")}><p>SIGN UP</p></div>
          <div className="icon" onClick={() => navigate("/mypage")}><p>MYPAGE</p></div>
          </div>
        </List>
            <Menus onMouseEnter={() => setIsHeaderHovered(true)} onMouseLeave={() => setIsHeaderHovered(false)} isHovered={isHeaderHovered}>
              <Menu onClick={() => navigate("/diy")}>PET'S DIARY</Menu>
              <Menu onClick={() => navigate("/map")}>MAPS</Menu>
              <Menu className="icon" onClick={() => navigate("/book")}>PET'S BOOKS</Menu>
              <Menu onClick={() => navigate("/quick")}>정기 구독</Menu>
              <Menu onClick={() => navigate("/service")}>Q&A</Menu>
            </Menus>
            
          <Contain>
        <Main>
          <Outlet />
        </Main>
        <Footer>
          <h1>푸터입니다</h1>
        </Footer>
      </Contain>
    </Container>
  );
};

export default Header;
