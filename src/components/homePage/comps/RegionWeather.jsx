import React from "react";
import styled from "styled-components";
import mapOfKorea from "../../../img/mapOfKorea.png"
const ItemBox = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  /* border: 1px solid black; */
`;

const Items = styled.div.attrs({
  className: "item-regionWeather",
})`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  width: 98%;
  height: 98%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #85C6F8;
  
  img { 
    width: 60%; 
    height: auto; 
  }
`;
const Banner = styled.div`
  
  
  height: 30%;
  width: 100%;
  border: 1px solid black;
  z-index: 9999;
  background-color: white;
  border-radius: 10px;
  
`;

const RegionWeather = () => {
  return (
    <>
      <ItemBox>
        
        <Items >
        <Banner></Banner>  
          <img src={mapOfKorea} alt="Korea Map" />
        </Items>
      </ItemBox>
    </>
  );
};

export default RegionWeather;