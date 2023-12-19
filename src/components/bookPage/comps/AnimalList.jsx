import React, { useState, useEffect, useRef } from "react";
import {WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List, ListRowProps} from 'react-virtualized';
import { useInView } from "react-intersection-observer";
import { getAnimals } from "../../../api/AnimalsApi";
import styled from "styled-components";


const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 500px;
  height: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(25% - 20px);
  margin: 10px;
  flex-grow: 1;
  
  transition: opacity 0.5s ease-in;
  img {
    width: 100%;
    height: 80%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [animalType, setAnimalType] = useState("dogs");
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchAnimalsData = async () => {
      const size = 4; // 한 페이지에 로드할 아이템 수
      const newAnimals = await getAnimals(animalType, page, size);
      console.log(newAnimals);
      setAnimals((prevAnimals) => [...prevAnimals, ...newAnimals]);
    };

    fetchAnimalsData();
  }, [animalType, page]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "5%",
      threshold: 0.1,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  

  const AnimalViewItem = ({ animal }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });
  
    return (
      <BreedItem 
        ref={ref} 
        style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
      >
        <img src={animal.image_link} alt={`${animal.name} 이미지`} />
        <p>{animal.name}</p>
      </BreedItem>
    );
  };

  return (
    <>
      <ItemContainer>
        <BreedListBox></BreedListBox>
        <BreedItemsBox>
          {animals.map((animal, index) => (
            <AnimalViewItem key={index} animal={animal} />
          ))}
          <div ref={loader} />
        </BreedItemsBox>
      </ItemContainer>
    </>
  );
};



export default AnimalList;