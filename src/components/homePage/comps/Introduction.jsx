import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from "styled-components";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../img/homePageImages", false, /\.(png|jpe?g|svg)$/)
);

const ItemBox = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Item = styled.div.attrs({
  className: "item-introduction",
})`
  
  width: 100%;
  height: 100%;
  overflow: hidden; // 이미지가 Item 밖으로 나가지 않도록 설정
`;

const Image = styled.img`
  
  
  width: 100vw;
  height: 50vw;
  object-fit: cover;
`;


const StyledSlider = styled(Slider)`
  .slick-slide div {
    /* outline: none; // Removes the outline border that appears on click */
    object-fit: cover;
  }
`;

const Arrow = styled.div`
  display: block;
  background: #ddd;
  padding: 10px; // 크기 조절
  border-radius: 50%; // 원형으로 만들기
  z-index: 99999999;
  &:hover {
    background: #ccc; // 마우스 오버 시 색상 변경
  }
`;

const Introduction = () => {
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  };
  
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  };
  
  
  const settings = {
    
    
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  

  

  return (
    <>
      <ItemBox>
        <Item>
          <StyledSlider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <Image src={src} alt={`Slide ${index}`} />
              </div>
            ))}
          </StyledSlider>
        </Item>
      </ItemBox>
    </>
  );
};

export default Introduction;
