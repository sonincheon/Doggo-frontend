import React, { useState, useEffect } from "react";
import styled from "styled-components";
import mapOfKorea from "../../../img/mapOfKorea.png";
import { citiesData, CityComponent } from "./WeatherMapper";
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
  height: 25%;
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

// 건들면 으르렁
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, minmax(0, 1fr));
  grid-template-rows: repeat(30, minmax(0, 1fr));
  grid-gap: 5px; // 셀 간 간격
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #85c6f8;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 중앙 정렬
    width: 70%;
    height: 100%;
  }
`;

const RegionWeather = () => {
  // 날씨 정보 api 데이터를 받아오기 위한 useState
  const [weatherData, setWeatherData] = useState({});
  // 오전 오후 토글 기능을 위한 useState
  const [morningAfternoon, setMorningAfternoon] = useState(true);

  // 오늘 날짜를 구하는 함수
  const getCurrentDate = () => {
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return parseInt(`${year}${month}${day}`);
  };

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const response = await WeatherAxiosApi.getWeathers();
        console.log("API response:", response);
        setWeatherData(response);
      } catch (error) {
        console.error("Error loading weather data:", error);
      }
    };

    loadWeatherData();
  }, []);

  const today = getCurrentDate();

  // api로 데이터를 불러오지않았는데 , 렌더링되어서 에러가 뜨는 것을 방지하는 함수
  const isDataLoaded = Object.keys(weatherData).length > 0;

  // 오전 버튼
  const showMorningData = () => {
    setMorningAfternoon(true);
  };

  // 오후 버튼
  const showAfternoonData = () => {
    setMorningAfternoon(false);
  };

  return (
    <ItemBox>
      <Items>
        <Banner>
          <BannerTitle>전국날씨</BannerTitle>
          <WeatherBar>
            <button onClick={showMorningData}>오전</button>
            <button onClick={showAfternoonData}>오후</button>
          </WeatherBar>
        </Banner>
        <ImageContainer>
          <img src={mapOfKorea} alt="Korea Map" />
          {isDataLoaded &&
            citiesData.map((city) => {
              const cityWeatherData = weatherData[city.name];
              const todayWeather = cityWeatherData.find(
                (weather) => weather.weatherDate === today
              );

              return (
                <CityComponent
                  key={city.name}
                  city={city}
                  weather={todayWeather}
                  isMorning={morningAfternoon} // 오전/오후 상태 전달
                />
              );
            })}
        </ImageContainer>
      </Items>
    </ItemBox>
  );
};

export default RegionWeather;

// 울산 수원 전주 강릉 서울 부산 안동 대전 목포 여수 청주 제주 대구 인천 춘천 광주
