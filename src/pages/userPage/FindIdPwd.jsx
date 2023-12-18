import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f3eeea;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 3vh;

  & .login {
    margin: 0 auto;

    font: normal normal bold 24px/35px Poppins;
    letter-spacing: 0px;
    color: black;
    opacity: 1;
  }
  .success {
    color: green;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebe3d5;
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

const Item = styled.input``;

const FindIdPwd = () => {
  return (
    <CenteredContainer>
      <Box>
        <Logo src="https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/test%2FKakaoTalk_20231129_122552306.png?alt=media&token=9646257a-86b4-4bfc-b170-b2163d3ad866" />
        <Container>
          <Item></Item>
          <Item></Item>
        </Container>
        <Container>
          <Item></Item>
          <Item></Item>
        </Container>
      </Box>
    </CenteredContainer>
  );
};
export default FindIdPwd;
