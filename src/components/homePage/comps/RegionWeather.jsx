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
  font-size: 2vw;
  color: #000;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  /* z-index: ; */
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

const Button = styled.button`
  position: absolute;
  top: 2%; // 상단으로부터 적절한 거리를 주어 위치시킵니다.
  background-color: ${(props) =>
    props.isActive
      ? "#4a90e2"
      : "#ffffff"}; // 활성화 상태에 따라 배경색을 설정합니다.
  color: ${(props) =>
    props.isActive
      ? "#ffffff"
      : "#000000"}; // 활성화 상태에 따라 텍스트 색상을 설정합니다.
  border: ${(props) =>
    props.isActive
      ? "none"
      : "1px solid #979797"}; // 비활성화 상태일 때 테두리를 설정합니다.
  width: 15%; // 버튼의 너비를 설정합니다.
  height: 6%; // 버튼의 높이를 설정합니다.

  text-align: center;
  display: inline-block;
  font-size: 1vw;
  cursor: pointer;
  

  z-index: 10; // 다른 요소들 위에 오도록 z-index 설정

  &:hover {
    opacity: 0.8; // 마우스 오버시 투명도 변경
  }
`;

const MorningButton = styled(Button)`
  border-radius: 5px 0 0 5px; // 오전 버튼은 오른쪽 모서리만 둥글게
`;

const AfternoonButton = styled(Button)`
  border-radius: 0 5px 5px 0; // 오후 버튼은 왼쪽 모서리만 둥글게
`;

const RegionWeather = () => {
   // 오늘 날짜를 구하는 함수
   const getCurrentDate = () => {
    const today = new Date();
    const year = String(today.getFullYear());
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return parseInt(`${year}${month}${day}`);
  };
 
  const today = getCurrentDate();
 
 
  // 날씨 정보 api 데이터를 받아오기 위한 useState
  const [weatherData, setWeatherData] = useState({});
  // 오전 오후 토글 기능을 위한 useState
  const [morningAfternoon, setMorningAfternoon] = useState(true);
  // 날씨정보는 일단 .. 오늘을 디폴트로 보여주고  state값이 변경됨에 따라 다른 요일도 렌더링
  // const [selectedDate, setSelectedDate] = useState(today);

 
  // 날씨데이터를 setWeatherData에 전달하기 위한 useEffect 후욱후욱
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

  // // 요일 버튼
  // const handleDateSelection = (date) => {
  //   setSelectedDate(date);
  // };

  return (
    <ItemBox>
      <Items>
        <Banner>
          <BannerTitle>전국산책지수</BannerTitle>
          <WeatherBar></WeatherBar>
        </Banner>
        <ImageContainer>
          <MorningButton
            onClick={showMorningData}
            isActive={morningAfternoon}
            style={{ left: "2%" }}>
            오전
          </MorningButton>
          <AfternoonButton
            onClick={showAfternoonData}
            isActive={!morningAfternoon}
            style={{ left: "17%" }}>
            오후
          </AfternoonButton>
          <img src={mapOfKorea} alt="Korea Map" />
          {isDataLoaded &&
            citiesData.map((city) => {
              const cityWeatherData = weatherData[city.name];
              const todayWeather = cityWeatherData.find(
                (weather) => weather.weatherDate === today
              );
              console.log(todayWeather)
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