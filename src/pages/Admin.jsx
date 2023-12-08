import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left:0;
    width: 15vw;
    height: 100vh;
    background-color: black;
    color:white;
    .menus{
        height: 10%;
    }
`;

const Admin = () =>{
    const navigate =useNavigate();
    return(
        <>
        <SideBar>
              <div className="menus" onClick={() => navigate("/admin")}>대쉬보드</div>
              <div className="menus" onClick={() => navigate("/admin/user")}>회원 관리</div>
              <div className="menus" onClick={() => navigate("/admin/sales")}>판매 관리</div>
              <div className="menus" onClick={() => navigate("/admin/qna")}>1:1 문의 관리</div>
        </SideBar>
        <Outlet/>
        </>
    )
}

export default Admin;