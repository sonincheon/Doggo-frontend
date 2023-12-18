import React, { useState, useEffect, useRef } from "react";

import { getAnimals } from "../../../api/AnimalsApi";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 500px;
  height: 100%;
  /* border: 1px solid black; */
`;

const BreedListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
`;
const BreedItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 80%;
  height: auto;
  min-height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const BreedItem = styled.div`
  width: calc(25% - 20px);
  margin: 10px;
  flex-grow: 1;
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
`;

const AnimalList = () => {
  // Api를 통해서 스프링에서 보낸 정보를 받을 스테이트훅
  const [animals, setAnimals] = useState([]);
  // 디폴트로 견종도감 내용을 보여주고 할당함수를 통해서 견종/묘종 변경하는 스테이트 훅
  const [animalType, setAnimalType] = useState("dogs");
  // 무한스크롤과 상호작용하는 스테이트 훅
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchAnimalsData = async () => {
      const newAnimals = await getAnimals(animalType);
      console.log(newAnimals);
      setAnimals(newAnimals); 
    };

    fetchAnimalsData();
  }, [animalType]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }
  
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ItemContainer>
        <BreedListBox></BreedListBox>

        <BreedItemsBox>
          {animals.map((animal, index) => (
            <BreedItem key={index}>
              <img src={animal.image_link} alt={`${animal.name} 이미지`} />
            </BreedItem>
          ))}
          {/* 무한 스크롤 로더 */}
          <div ref={loader} />
        </BreedItemsBox>
      </ItemContainer>
    </>
  );
};

export default AnimalList;
