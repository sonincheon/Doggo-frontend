import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #2b2a2a;
  color: #f3eeea;
  padding: 10px;

  position: absolute;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* p:nth-child(1) {
        white-space: normal;
    } */

  .menus {
    color: #776b5d;
    cursor: pointer;
  }
  .menus:hover p {
    color: #f3eeea;
    transition: all 0.3s;
  }
  hr {
    border: 0.5px solid #776b5d;
    width: 100%;
    margin: 10%;
  }
  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 13vh;
    margin-left: 0;
    position: static;
    flex-direction: row;
    justify-content: space-around;
    white-space: nowrap;
    overflow: hidden;
    hr {
      display: none;
    }
  }
`;

const Admin = () => {
  const navigate = useNavigate();
  return (
    <>
      <SideBar>
        <p>admin@mungnang.com </p>
        <hr />
        <div className="menus" onClick={() => navigate("/admin")}>
          <p>대쉬보드</p>
        </div>
        <hr />
        <div className="menus" onClick={() => navigate("/admin/member")}>
          <p>회원 관리</p>
        </div>
        <hr />
        <div className="menus" onClick={() => navigate("/admin/sales")}>
          <p>판매 관리</p>
        </div>
        <hr />
        <div className="menus" onClick={() => navigate("/admin/qna")}>
          <p>1:1 문의 관리</p>
        </div>
        <hr />
      </SideBar>
      <Outlet />
    </>
  );
};

export default Admin;
