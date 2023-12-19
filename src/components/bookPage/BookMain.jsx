import React, { useState } from "react";
import styled from "styled-components";

import TopItems from "./comps/TopItems";
import AnimalList from "./comps/AnimalList";

const SectionContainer = styled.section.withConfig({
  // shouldForwardProp: (prop) => !["inView"].includes(prop),
  className: "section-container",
})`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const ItemContainer = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;

  width: ${(props) => props.$width || "95%"};
  height: ${(props) => props.$height || "20%"};
  min-height: ${(props) => props.$minHeight || "20%"};
`;

const BookMain = () => {
  const [animalType, setAnimalType] = useState("dogs");
  const [page, setPage] = useState(0);
  return (
    <>
      <SectionContainer>
        <ItemContainer $height="100px">
          <TopItems animalType={animalType} setAnimalType={setAnimalType} setPage={setPage} />
        </ItemContainer>
        <ItemContainer $height="80%" $minHeight="80%">
          <AnimalList animalType={animalType} page={page}/>
        </ItemContainer>
      </SectionContainer>
    </>
  );
};

export default BookMain;
