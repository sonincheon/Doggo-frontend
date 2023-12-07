import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';


function importAll(r) {
  return r.keys().map(r);
}

// 테스트를 위한 이미지를 위한 선언 , 테스트 끝나고 유기할 예정
const images = importAll(require.context('../../../img/strays/', false, /\.(png|jpe?g|svg)$/));
const extendedImages = [...images, ...images, ...images];

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;


const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 99%;
  border: 1px solid black;
`;


const SliderTrack = styled.div`
  display: flex;
  
  width: calc(100% * ${extendedImages.length / 3});
  animation: ${slide} 120s linear infinite;
`;


const Slide = styled.div`
  width: 15vw; 
  flex: 0 0 auto;
  height: 15vw; 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
  }
`;


const Strays = () => {
  return (
    <SliderContainer>
      <SliderTrack>
        {extendedImages.map((image, index) => (
          <Slide key={index}>
            <img src={image} alt={`Stray ${index}`} />
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default Strays;
