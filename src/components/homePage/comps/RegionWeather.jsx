import React, {useState, useEffect} from "react";
import styled from "styled-components";
import mapOfKorea from "../../../img/mapOfKorea.png";
import axios from "axios";
import { WeatherAxiosApi } from "../../../api/WeatherApi";

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
  width: 98%;
  height: 98%;
  border-radius: 10px;
`;
const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 0 0;
`;

const BannerTitle = styled.div`
  display: flex;
  align-items: center;
  height: 35%;
  width: 100%;
  font-size: 2rem;
  color: #000;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  z-index: 99999;
`;

const WeatherBar = styled.div`
  display: flex;
  align-items: center;
  height: 65%;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 100%;
  border-radius: 10px;
  background-color: #85c6f8;
  img {
    width: 60%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
`;

const RegionWeather = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const data = await WeatherAxiosApi.getWeathers();
        console.log("API response:", data); // API 응답 출력
        setWeatherData(data); // 데이터 할당 set
      } catch (error) {
        console.error('Error loading weather data:', error); // API 호출 실패 시 오류 처리
      }
    };
  
    loadWeatherData();
  }, []);

  const handleImageClick = (e) => {
    const imageBounds = e.target.getBoundingClientRect();
    const x = e.clientX - imageBounds.left; // X 좌표 계산
    const y = e.clientY - imageBounds.top;  // Y 좌표 계산

    console.log(`X: ${x}, Y: ${y}`); // 콘솔에 좌표 출력
  };

  
  return (
    <>
      <ItemBox>
        <Items>
          <Banner>
            <BannerTitle>전국날씨</BannerTitle>
            <WeatherBar></WeatherBar>
          </Banner>
          <ImageContainer>
            <img src={mapOfKorea} alt="Korea Map" 
            onClick={handleImageClick} // 이미지 클릭 이벤트 핸들러 추가
            />
            
          </ImageContainer>
        </Items>
      </ItemBox>
    </>
  );
};

export default RegionWeather;


// 울산 수원 전주 강릉 서울 부산 안동 대전 목포 여수 청주 제주 대구 인천 춘천 광주