import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';


const ItemBox = styled.div.attrs({
    className: "item-container",
  })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  `;
  
  const Items = styled.div.attrs({
    className: "item-currentWeather",
  })`
    width: 98%;
    height: 98%;
    border: 1px solid black;
    border-radius: 10px;
    border: 1px solid black;
  `;

const Container = styled.div`
  padding: 2vw; // 패딩을 vw로 변경
`;

const TitleSmall = styled.h4`
  color: #65c178;
  margin-bottom: 1vw; // 마진을 vw로 변경
`;

const TitleLarge = styled.h1`
  font-size: 3vw; // 폰트 크기를 vw로 변경
  margin-bottom: 1.5vw; // 마진을 vw로 변경
  span.text-primary {
    color: #ed6436;
  }
  span.text-secondary {
    color: #65c178;
  }
`;

const Subtitle = styled.h5`
  color: #6c757d;
  margin-bottom: 1vw; // 마진을 vw로 변경
`;

const Paragraph = styled.p`
  margin-bottom: 1.5vw; // 마진을 vw로 변경
`;

const CheckList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 2vw; // 마진을 vw로 변경

  li {
    h5 {
      display: flex;
      align-items: center;
      color: #6c757d;
      font-weight: normal;
      font-size: 1.25vw; // 폰트 크기를 vw로 변경

      i {
        margin-right: 1vw; // 마진을 vw로 변경
      }
    }
  }
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 1vw 2vw; 
  background-color: #ed6436;
  color: white;
  border-radius: 0.5vw; 
  text-decoration: none;
  font-size: 1.25vw; 
  margin-top: 1vw; 
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #e84a15; 
    transition: .15s ease-in-out;
  }
`;

const AboutUs = () => {
  return (
    <ItemBox>
        <Items>
    <Container>
      <TitleSmall>About Us</TitleSmall>
      <TitleLarge>
        <span className="text-primary">워딩 워딩</span> &amp; <span className="text-secondary">워딩 워딩</span>
      </TitleLarge>
      <Subtitle>
        워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩
      </Subtitle>
      <Paragraph>
      워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩 워딩
      </Paragraph>
      <CheckList>
      <li>
        <h5><FontAwesomeIcon icon={faCheckDouble} className="icon" />워딩 워딩 워딩 워딩</h5>
      </li>
      <li>
        <h5><FontAwesomeIcon icon={faCheckDouble} className="icon" />워딩 워딩 워딩 워딩</h5>
      </li>
      <li>
        <h5><FontAwesomeIcon icon={faCheckDouble} className="icon" />워딩 워딩 워딩 워딩</h5>
      </li>
      </CheckList>
      <LearnMoreButton href="https://www.free-css.com/free-css-templates">더보기</LearnMoreButton>
    </Container>
    </Items>
    </ItemBox>
  );
}

export default AboutUs;