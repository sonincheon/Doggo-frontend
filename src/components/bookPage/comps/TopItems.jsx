import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

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
  className : "InnerBox"
}
  
)`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
 
  align-items: ${(props) => props.$alignItems || "center"};
  width: ${(props) => props.$width || "50%"};
  height: 100%;
  
`;



const TopItems = () => {
  const [searchAnimal, setSearchAnimal] = useState();
  //검색을 위한 onClick 함수
  const searchByName = () => {};
  return (
    <>
      <ItemContainer>
        <ItemBox>
          <InnerBox $width="150px">
            
          </InnerBox>
        </ItemBox>
        <ItemBox>
          <InnerBox
            $width="100%"
            $flexDirection="row-reverse"
            $justifyContent="flex-start">
          </InnerBox>
        </ItemBox>
      </ItemContainer>
    </>
  );
};

export default TopItems;
