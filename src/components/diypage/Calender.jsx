import React, { Children, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Container =styled.div`
  width: 60%;
`;

const StyledCalendar = styled(Calendar)`
  /* 전체 스타일 */
  border-radius: 10px;
  width: 100%;
  height: 600px;
  background-color: #f3eeea;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  box-shadow: none;
    /* 글자 스타일 */
    .react-calendar__month-view__days__day-names,
  .react-calendar__month-view__days__day {
    font-family: 'Arial', sans-serif;
    font-size: 13px;
    color: #333333;
    border: none;
  }
  
  .react-calendar__tile--active:hover {
    background-color: #cce5ff; /* 선택된 날짜 호버 시 배경색 변경 */
    cursor: pointer;
  }
  .react-calendar__tile--active {
    border-bottom:5px solid red;
    background-color:#f3eeea; /* 선택된 날짜 배경색 */
  }

  .react-calendar__tile:hover {
    background-color: #f3eeea; /* 호버 시 배경색 변경 */
    cursor: pointer;
  }
  /* 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday abbr {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #555555;
    text-decoration: none;
    
  }
  /* 년월 스타일 */
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    background-color: #B0A695;
    border: 1px solid black;
    border-radius: 10px 10px 0 0;
    border: none;
  }
  /* 년월 스타일 */
  .react-calendar__navigation__label {
    font-family: 'Arial', sans-serif;
    font-size: 15px;
    color: #eeeeee;
    margin: 0 10px;
    font-weight: bold;
  }

  .react-calendar__navigation__arrow {
    font-size: 24px;
    color: #eeeeee;
    cursor: pointer;
  }

  .react-calendar__month-view__days {
    margin:5px 0; /* 위쪽 간격 조정 */ /* 아래쪽 간격 조정 */
  }
  .react-calendar__tile {
    height: 75px;
  }
  .react-calendar__tile:hover {
    background-color: none;
  }
`;

const MyCalender = () =>{
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const tileContent = ({ date, view }) => {
    return (
      <div style={{ fontSize: '20px' }}>
        {date.getDate() === 1 ? '🎉' : '😁'} {/* 1일에는 파티 아이콘, 그 외엔 체크 아이콘 */}
      </div>
    );
  };

  return (
    <Container>
      <h1>선택된 날짜: {date.toDateString()}</h1>
        <StyledCalendar onChange={onChange} value={date} tileContent={tileContent}/> 
    </Container>
  );
  };
  
  export default MyCalender;