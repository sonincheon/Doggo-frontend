import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  dfs_xy_conv,
  onSuccess,
  onError,
} from "./CurrentLocationWeatherFunction";
import { getGeocodeKakao } from "../../../../api/CurrentLocationWeatherApi";
import {
  weather_background,
  good_weather,
  bad_weather,
} from "../../../../img/weather";

import CurrentAddressContext from "../../CurrentAddressContext";

const ItemBox = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
`;

const Items = styled.div.attrs({
  className: "item-currentWeather",
})`
  width: 98%;
  height: 98%;
  border: 1px solid black;
  border-radius: 10px;
`;

const Banner = styled.div`
  height: 20%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
`;

const GoodOrBad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  border: 1px solid black;
  background-image: url(${weather_background});
  background-size: cover;
  background-position: center;
`;

const WeatherStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 60%;
  width: 30%;
`;

const DoggyIcon = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
`;

const WeatherItemBox = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 1px solid black;
  height: 100%;
  width: 100%;
`;



const CurrentLocationWeather = () => {
  // 리액트 라이브러리로 위도경도를 구하는 훅
  const [location, setLocation] = useState({ lat: 0, long: 0 });
  // api 요청을 통해 정보획들 실패 에러 스테이트훅
  const [error, setError] = useState(null);
  // 카카오 api에서 위도경도로 주소값 얻어오는 스테이트훅
  const [address, setAddress] = useState("");
  // 기상청에 전달할 지리정보를 구하는 스테이트 훅
  const [coords, setCoords] = useState("");
  // 파이썬에서 넘어온 실시간 기상정보 스테이트훅
  const [weather, setWeather] = useState("");
  // 좋음/나쁨 표현을 위한 스테이트훅
  const [weatherCondition, setWeatherCondition] = useState(null);
  // 현재 위치값을 메인페이지에 한해서 공유하는 컨테스트훅
  const { setCurrentAddress } = useContext(CurrentAddressContext);

  // 리액트 라이브러리를 통해 위도/경도를 얻어오는 이펙트훅
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => onSuccess(position, setLocation),
      (error) => onError(error, setError)
    );
    // console.log(location);
  }, []);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  // 카카오 api에 위도/경도를 통해 주소값을 얻어오는 이펙트훅
  useEffect(() => {
    const updateAddress = async () => {
      try {
        const addr = await getGeocodeKakao(location.lat, location.long);
        setAddress(addr);
        setCurrentAddress(addr); // 메인페이지 한해서 전역적으로 쓰기 위해 할당
      } catch (error) {
        console.error("Kakao Geocoding error:", error);
      }
    };
    // 실시간 위도/경도 정보가 바뀔시, 재차 카카오 api 요청 및 x 값 y 값 요청
    if (location.lat && location.long) {
      updateAddress();
      setCoords(dfs_xy_conv("toXY", location.lat, location.long));
    }
  }, [location.lat, location.long]);

  // 플라스크서버로 xy값과 함께 api 요청을 하는 이펙트훅
  useEffect(() => {
    const getWeather = async () => {
      if (coords.x && coords.y) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/api/weather?x=${coords.x}&y=${coords.y}`
          );
          // console.log(response.data);
          setWeather(response.data);

        } catch (error) {
          console.error("Weather error:", error);
        }
      }
    };

    if (coords) getWeather();
  }, [coords]);

  // 날씨 상태값 0 ~ 7 을 바탕으로 맑은경우 산책 지수 좋음 , 아닌경우 나쁨
  useEffect(() => {
    if (parseInt(weather.condition) === 0) {
      setWeatherCondition(true);
    } else {
      setWeatherCondition(false);
    }
  }, [weather]);

  // 타이밍 이슈 해결해야됨 TT

  

  return (
    <>
      <ItemBox>
        <Items>
          <Banner>현재위치 산책지수</Banner>
          <GoodOrBad>
            {weatherCondition ? (
              <WeatherStatus>
                <DoggyIcon src={good_weather} alt="so good to go outside lol" />
                좋음
              </WeatherStatus>
            ) : (
              <WeatherStatus>
                <DoggyIcon src={bad_weather} alt="so bad to go outside TT" />
                나쁨
              </WeatherStatus>
            )}
          </GoodOrBad>
          <WeatherItemBox>
            <WeatherItem>
              <p>온도 : {weather.tmp}</p>
            </WeatherItem>
            <WeatherItem>
              <p>습도 : {weather.hum}</p>
            </WeatherItem>
            <WeatherItem>
              <p>강수량 : {weather.rain}</p>
            </WeatherItem>
          </WeatherItemBox>
        </Items>
      </ItemBox>
    </>
  );
};

export default CurrentLocationWeather;
