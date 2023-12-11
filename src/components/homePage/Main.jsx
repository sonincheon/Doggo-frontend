import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import Introduction from "./comps/Introduction";
import UserStatus from "./comps/UserStatus";
import CurrentLocationWeather from "./comps/CurrentLocationWeather";
import RegionWeather from "./comps/RegionWeather";
import Strays from "./comps/Strays";

const fadeIn = `
  opacity: 1;
  transform: translateY(0px);
`;

const fadeOut = `
  opacity: 0;
  transform: translateY(30px);
`;

const SectionContainer = styled.section.withConfig({
  // shouldForwardProp: (prop) => !["inView"].includes(prop),
  className: "section-container",
})`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100vw;
  height: 100vw;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  /* box-shadow: 0 .5px  rgba(0, 0, 0, 0.12); */
  border: 1px solid black;
  /* ${({ inView }) => (inView ? fadeIn : fadeOut)} */
`;

const ItemContainer = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  width: 80%;
  height: ${(props) => props.height || "30%"};
  /* border: 1px solid black; */
`;

const Main = () => {
  return (
    <>
      <SectionContainer>
        <ItemContainer>
          <Introduction />
          <UserStatus />
        </ItemContainer>
        <ItemContainer height="40%">
          <CurrentLocationWeather />
          {/* <RegionWeather /> */}
        </ItemContainer>
      </SectionContainer>
      {/* <SectionContainer>
        <ItemContainer>
          <Strays></Strays>
        </ItemContainer>
      </SectionContainer> */}
    </>
  );
};

export default Main;
