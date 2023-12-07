import React from "react";
import styled from "styled-components";

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
  width: 98%;
  height: 98%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #D9D9D9;
`;
const Banner = styled.div`
  height: 20%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  background-color: #B0A695;
`;

const RegionWeather = () => {
  return (
    <>
      <ItemBox>
        <Items>
          <Banner></Banner>
        </Items>
      </ItemBox>
    </>
  );
};

export default RegionWeather;