import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./pages/Header";
import Bookmain from "./pages/bookPage/Bookmain";
import Diymain from "./pages/diyPage/Diymain";
import Mapmain from "./pages/mapPage/Mapmain";
import Quickmain from "./pages/quickPage/Quickmain";
import ServiceMain from "./pages/servicePage/Servicemain";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as React from "react";
import { useState, useCallback } from "react";
import Signup from "./pages/userPage/SignUp";
import Quicksell from "./pages/quickPage/Quicksell";
import Quicksucess from "./pages/quickPage/Quicksucess";
import Quicksale from "./pages/quickPage/Quicksale";
import { TossPage } from "./utill/Toss";
import MyPage from "./pages/userPage/MyPage";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import Adminmainpage from "./pages/adminPage/Adminmainpage";
import Adminmemberpage from "./pages/adminPage/Adminmemberpage";
import Adminsalespage from "./pages/adminPage/Adminsalespage";
import Adminqnapage from "./pages/adminPage/Adminqnapage";
import Qnadetailpage from "./pages/adminPage/Qnadetailpage";
import Quicktoss from "./pages/quickPage/Quicktoss";
import PayStore from "./context/Paystore";

const GlobalStyle = createGlobalStyle`
  ${reset}
    
  *{  
    box-sizing : border-box;
  }
  body{
    font-family: Nanum;
  }
  /* other styles */
`;

function App() {
  return (
    <>
    {/* 결제용 context  */}
     <PayStore>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* 여긴 헤더 풋터 구간  */}
          <Route element={<Header />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<Bookmain />} />
            <Route path="/diy" element={<Diymain />} />
            <Route path="/map" element={<Mapmain />} />
            <Route path="/quick" element={<Quickmain />} />
            <Route path="/service" element={<ServiceMain />} />
              <Route path="/quick/sell/:feedId/:title" element={<Quicksell />} />
              <Route path="/quick/toss" element={<TossPage />} />
              <Route path="/quick/tosspay" element={<Quicktoss />} />
            <Route path="/quick/sales" element={<Quicksale />} />
            <Route path="/quick/sucess" element={<Quicksucess />} />
            <Route path="/mypage/" element={<MyPage />} />
          </Route>
          {/* 여긴 어드민 구간  */}
          <Route element={<Admin />}>
            <Route path="/admin" element={<Adminmainpage />} />
            <Route path="/admin/user" element={<Adminmemberpage />} />
            <Route path="/admin/sales" element={<Adminsalespage />} />
            <Route path="/admin/qna" element={<Adminqnapage />} />
            <Route path="/admin/qna/:id" element={<Qnadetailpage />} />
          </Route>
        </Routes>
      </Router>
      </PayStore>
    </>
  );
}

export default App;
