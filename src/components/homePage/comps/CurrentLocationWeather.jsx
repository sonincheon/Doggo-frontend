import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const RE = 6371.00877; // 지구 반경(km)
const GRID = 5.0; // 격자 간격(km)
const SLAT1 = 30.0; // 투영 위도1(degree)
const SLAT2 = 60.0; // 투영 위도2(degree)
const OLON = 126.0; // 기준점 경도(degree)
const OLAT = 38.0; // 기준점 위도(degree)
const XO = 43; // 기준점 X좌표(GRID)
const YO = 136; // 기1준점 Y좌표(GRID)

const ItemBox = styled.div.attrs({
  className: "item-container",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  /* border: 1px solid black; */
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

const CurrentLocationWeather = () => {
  const [location, setLocation] = useState({ lat: 0, long: 0 });
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState("");
  const [weather, setWeather] = useState("");

  const getGeocodeKakao = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
        {
          headers: {
            Authorization: `KakaoAK 2dda918f299fb6e8325412499bf9a08a`,
          },
        }
      );
      setAddress(response.data.documents[0].address.address_name);
    } catch (error) {
      console.error("Kakao Geocoding error:", error);
    }
  };

  const onSuccess = (position) => {
    setLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  const onError = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  useEffect(() => {
    console.log(location.lat, location.long);
    getGeocodeKakao(location.lat, location.long);
  }, [location]);

  useEffect(() => {
    dfs_xy_conv("toXY", location.lat, location.long);
  }, [address]);

  useEffect(() => {
    const getWeather = async () => {
      console.log("weather Call", coords.x, coords.y);
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/weather2?x=${coords.x}&y=${coords.y}`
        );
        console.log(response.data);
        setWeather(response.data);
      } catch (error) {
        console.error("Weather error:", error);
      }
    };
    if (coords) getWeather();
  }, [coords]);

  function dfs_xy_conv(code, v1, v2) {
    const DEGRAD = Math.PI / 180.0;
    const RADDEG = 180.0 / Math.PI;

    const re = RE / GRID;
    const slat1 = SLAT1 * DEGRAD;
    const slat2 = SLAT2 * DEGRAD;
    const olon = OLON * DEGRAD;
    const olat = OLAT * DEGRAD;

    let sn =
      Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
      Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
    let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
    sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
    let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
    ro = (re * sf) / Math.pow(ro, sn);
    let rs = {};
    if (code === "toXY") {
      rs["lat"] = v1;
      rs["lng"] = v2;
      let ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
      ra = (re * sf) / Math.pow(ra, sn);
      let theta = v2 * DEGRAD - olon;
      if (theta > Math.PI) theta -= 2.0 * Math.PI;
      if (theta < -Math.PI) theta += 2.0 * Math.PI;
      theta *= sn;
      rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
      rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
    } else {
      rs["x"] = v1;
      rs["y"] = v2;
      let xn = v1 - XO;
      let yn = ro - v2 + YO;
      let ra = Math.sqrt(xn * xn + yn * yn);
      if (sn < 0.0) ra = -ra;
      var alat = Math.pow((re * sf) / ra, 1.0 / sn);
      alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

      let theta = 0.0;
      if (Math.abs(xn) <= 0.0) {
        theta = 0.0;
      } else {
        if (Math.abs(yn) <= 0.0) {
          theta = Math.PI * 0.5;
          if (xn < 0.0) theta = -theta;
        } else theta = Math.atan2(xn, yn);
      }
      var alon = theta / sn + olon;
      rs["lat"] = alat * RADDEG;
      rs["lng"] = alon * RADDEG;
    }
    setCoords({ x: rs.x, y: rs.y });
  }

  return (
    <>
      <ItemBox>
        <Items>
          <Banner></Banner>
          <p>위도: {location.lat}</p>
          <p>경도: {location.long}</p>
          <p>주소 : {address}</p>
          <p>기상청 X : {coords.x}</p>
          <p>기상청 Y : {coords.y}</p>
          <p>온도 : {weather.tmp}</p>
          <p>습도 : {weather.hum}</p>
          <p>강수량 : {weather.pre}</p>
          <p>상태1 : {weather.sky}</p>
          <p>상태2 : {weather.sky2}</p>
        </Items>
      </ItemBox>
    </>
  );
};
export default CurrentLocationWeather;
