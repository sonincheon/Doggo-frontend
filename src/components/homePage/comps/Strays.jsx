import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { useNavigate } from "react-router-dom";
import { fetchStrays } from "../../../api/StraysApi";

function importAll(r) {
  return r.keys().map(r);
}

// 테스트를 위한 이미지를 위한 선언 , 크롤링 과 API 끝나고 유기할 예정
const images = importAll(require.context('../../../img/strays/', false, /\.(png|jpe?g|svg)$/));
const extendedImages = [...images, ...images, ...images];

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%); // 50% 지점에서 첫 번째 배열의 끝에 도달
  }
  100% {
    transform: translateX(-100%); // 100% 지점에서 두 번째 배열의 끝에 도달, 전체 슬라이드의 끝
  }
`;


const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 99%;
  padding-bottom: 1%;
  border-radius: 10px;
`;


const SliderTrack = styled.div`
  display: flex;
  height: 80%;
  width: calc(100% * ${extendedImages.length});
  animation:  ${slide} 720s linear infinite;
`;

const Banner = styled.div`
  height: 20%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  background-color: #B0A695;
`;



const Slide = styled.div`
  width: 20vw; 
  height: 100%; 
  margin-right: 0.1%; 
  padding: 0; 

  img {
    width: 100%; 
    height: 80%; 
    object-fit: cover; 
  }
`;



const InfoArea = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1vw;
  border: 1px solid black;
  border-radius: 0 0 10px 10px;
  background-color: #B0A695;
  
`;


const Strays = () => {
  const [strays, setStrays] = useState([]);
//   const navigate = useNavigate();

  useEffect(() => {
    // 스트레이 데이터 로드
    const loadStrays = async () => {
      try {
        const data = await fetchStrays();
        setStrays(data);
      } catch (error) {
        console.error('Error fetching strays:', error);
        // 여기에 사용자에게 오류를 알리는 UI를 추가할 수 있습니다.
      }
    };

    loadStrays();
  }, []);

  const handleSlideClick = () => {
    // console.log(id);
    // TODO: 실제 이동 경로 설정 필요
    // navigate("/", { state: { strayId: id } });
  };


  return (
    <>
    <SliderContainer>
      <Banner/>
      <SliderTrack>
      
        {extendedImages.map((index) => (
          <Slide key={index} onClick={() => handleSlideClick()}>
            {/* api로 데이터 넘어오면 주석처리한 부분으로 대체할 예정 */}
            {/* <img src={stray.image} alt={`Stray ${stray.name}`} /> */}
            <img src={index} alt={`Stray ${index}`} />
            <InfoArea>
              <p>보호소 위치: 천호</p>
              <p>이름: 돼냥이</p>
              <p>나이: 3살</p>
              <p>품종: 돼지</p>
            </InfoArea>
          </Slide>
        ))}
      </SliderTrack>
    </SliderContainer>
    </>
  );
};


export default Strays;




