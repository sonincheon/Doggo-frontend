import React, { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const ItemBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  /* border: 1px solid black; */
`;

const InnerBox = styled.div.attrs({
  className: "InnerBox",
})`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};

  align-items: ${(props) => props.$alignItems || "center"};
  width: ${(props) => props.$width || "50%"};
  height: 100%;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
  &:hover {
    background-color: black;
  }
`;

const Dropdown = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  font-size: 16px;
  margin-left: 10px; // 필요에 따라 조정

  &:focus {
    outline: none;
    border-color: var(--blue);
  }
`;

const TopItems = ({
  animalType,
  setAnimalType,
  setPage,
  dropdownOptions,
  setDropdownOption,
}) => {
  const toggleAnimal = () => {
    setPage(0);
    setAnimalType(animalType === "dogs" ? "cats" : "dogs");
  };
  const handleDropdownChange = (e) => {
    setDropdownOption(e.target.value);
  };

  return (
    <>
      <ItemContainer>
        <ItemBox>
          <InnerBox
            $width="100%"
            $flexDirection="row-reverse"
            $justifyContent="flex-start">
            <ToggleButton onClick={toggleAnimal}>
              {animalType === "dogs" ? "Show Cats" : "Show Dogs"}
            </ToggleButton>
          </InnerBox>
        </ItemBox>
        <ItemBox>
          <InnerBox
            $width="100%"
            $flexDirection="row-reverse"
            $justifyContent="flex-start">
            <Dropdown onChange={handleDropdownChange}>
              {
                animalType === "dogs"
                  ? dogOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : animalType === "cats"
                  ? catOptions.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null 
              }
            </Dropdown>
          </InnerBox>
        </ItemBox>
      </ItemContainer>
    </>
  );
};

export default TopItems;
