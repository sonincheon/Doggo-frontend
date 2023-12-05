import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./pages/Header";
import Bookmain from "./pages/bookPage/Bookmain";
import Diymain from "./pages/diyPage/Diymain";
import Mapmain from "./pages/mapPage/Mapmain";
import Quickmain from "./pages/quickPage/Quickmain";
import ServiceMain from "./pages/servicePage/Servicemain";
import Main from "./pages/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as React from "react";
import { useState, useCallback } from "react";
import Signup from "./pages/userPage/SignUp";

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
    < >
    <GlobalStyle/>
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* 여긴 헤더 풋터 구간  */}
            <Route element={<Header/>}>
              <Route path="/" element={<Main/>}/>
              <Route path="/book" element={<Bookmain/>}/>
              <Route path="/diy" element={<Diymain/>}/>
              <Route path="/map" element={<Mapmain/>}/>
              <Route path="/quick" element={<Quickmain/>}/>
              <Route path="/service" element={<ServiceMain/>}/>
              </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
