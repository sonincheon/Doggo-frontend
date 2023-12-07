import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import piggyCat from "../../../img/piggyCat.jpeg"

const ItemBox = styled.div.attrs({
    className: "item-container",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* border: 1px solid black; */
  `;

const Banner = styled.div`
  height: 20%;
  width: 99%;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  background-color: #B0A695;
`;

const StyledSlider = styled(Slider)`
  
  height: 80%;
  width: 99%;
  border: 1px solid black;
  border-radius: 0 0 10px 10px;

  

`;

const SliderItem = styled.div`
  img {
    max-width: 20vw;
    max-height: 20vw;
    object-fit: contain; 
  }
`;

const Strays = () => {
    
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnFocus: true
      };

  return (
    <>
      
        <ItemBox>
          <Banner>

          </Banner>
          <StyledSlider {...settings}>
          <SliderItem>
            <img src={piggyCat} alt="test" />
          </SliderItem>
          </StyledSlider>
        </ItemBox>

        
      
    </>
  );
};

export default Strays;