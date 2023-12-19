import HouseBtn from "../../components/HouseBtn";
import { Center } from "../../components/PublicStyle";
import MyCalender from "../../components/diypage/Calender";
import styled from "styled-components";
import Eventbox from "../../components/diypage/Eventbox";
import { useState } from "react";

const Btween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Diymain = () => {
  const newDate = () => {
    const nextDay = new Date(); // date를 변경하지 않고 새로운 객체를 생성합니다.
    nextDay.setDate(nextDay.getDate()); // 다음 날짜로 설정합니다.
    return nextDay.toISOString().split("T")[0];
  };
  const [day, setDay] = useState(newDate());

  const onSelect = (sel) => {
    setDay(selectedDate(sel));
  };

  const selectedDate = (date) => {
    const nextDay = new Date(date); // date를 변경하지 않고 새로운 객체를 생성합니다.
    nextDay.setDate(nextDay.getDate() + 1); // 다음 날짜로 설정합니다.
    return nextDay.toISOString().split("T")[0]; // ISO 형식의 날짜를 반환합니다.
  };

  return (
    <>
      <HouseBtn />
      <Btween>
        <MyCalender onSelected={onSelect} />
        <Eventbox day={day} />
      </Btween>
    </>
  );
};

export default Diymain;
