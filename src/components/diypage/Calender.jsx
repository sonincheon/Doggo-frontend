import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import styled from "styled-components";
import dayjs from 'dayjs';
const Container = styled.div`
/* 캘린더 전체 스타일 */
width: 100%;
  .react-calendar { 
 width:100%; /* 캘린더 너비 */
 max-width: 600px; /* 최대 너비 */
 height: 80%;
 background-color: #EBE3D5;/* 배경색 */
 color : #222; /* 글자색 */
 border-radius: 8px; /* 테두리 반지름 */
 font-family: Arial, Helvetica, sans-serif; /* 글꼴 */
 line-height: 5em; /* 줄 높이 */
 display: flex;
 flex-direction: column;
 border: none;
 align-items: center;
 font-weight: bold;
}`;

const MyCalender = () =>{
    const [startDate, setStartDate] = useState("");
    const onChangeDateRange = (newDateRange) => {
      const formattedStartDate = dayjs(newDateRange[0]).format('YYYY년 MM월 DD일');
      setStartDate(formattedStartDate);
    };
    return (
    <>
    <Container>
        <Calendar
            onChange={onChangeDateRange}
            selectRange={true}
            formatDay={(locale, date) => dayjs(date).format('DD')}
        />
    </Container>
        <p>선택된 시작일: {startDate}</p>
    </>
    );
  };
  
  export default MyCalender;