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
        setWeatherData(data); // 데이터 설정
      } catch (error) {
        console.error('Error loading weather data:', error); // API 호출 실패 시 오류 처리
      }
    };
  
    loadWeatherData();
  }, []);
  
  return (
    <>
      <ItemBox>
        <Items>
          <Banner>
            <BannerTitle>전국날씨</BannerTitle>
            <WeatherBar></WeatherBar>
          </Banner>
          <ImageContainer>
            <img src={mapOfKorea} alt="Korea Map" />
          </ImageContainer>
        </Items>
      </ItemBox>
    </>
  );
};

export default RegionWeather;
