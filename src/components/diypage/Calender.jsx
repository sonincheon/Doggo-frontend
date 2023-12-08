import React, { Children, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import dayjs from 'dayjs';

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
  align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__month-view__weekdays__weekday{
    border: 2px solid #B0A695;
    scale: 0.99;
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
    font-size: 0.8em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: start;
    scale: 0.99;
    border: 2px solid #B0A695;
  }
  .react-calendar__tile--active {
    border-bottom:5px solid #e55026;
    background-color:#f3eeea; /* 선택된 날짜 배경색 */
  }
  
.react-calendar__tile--active:active,
  .react-calendar__tile:hover {
    background-color: #B0A695;
  }
  .react-calendar__tile--now:active,
.react-calendar__tile--now:hover {
  /* 오늘 날짜에 대한 호버 및 액티브 스타일 */
  background-color: #f3eeea;
  
}
.react-calendar__tile--now {
  background-color: #f3eeea;
  border-bottom: 5px solid #2e49ce;
  /* 오늘 날짜에 대한 스타일 */
}
`;

const Story =styled.div`
display: flex;
flex-direction: column;
width: 100%;
  .story1{
    white-space : nowrap ;
    overflow : hidden;
    text-overflow: ellipsis;
    font-size: 0.9em;
    background-color: #ffb0b0;
    border-radius: 3px;
  }
  .story2{
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 0.9em;
    background-color: #97f095;
    border-radius: 3px;
    color:blue;
  }
`;


const MyCalender = () =>{
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const data =[
    {
      date:"9",
      title:"오늘은 이런일이있었다",
      percent:"100%"
    },
    {
      date:"11",
      title:"개같은일이있엇다 너무너무",
      percent:"11%"
    },
    {
      date:"20",
      title:"홀리쉣이였다 너무너무너무너무",
      percent:"12%"
    },
    {
      date:"29",
      title:"오마이갓 이엿다  너무너무너무너무",
      percent:"27%"
    },
    {
      date:"4",
      title:"css하기싫네 너무너무너무너무",
      percent:"18%"
    }
]

  const tileContent = ({ date }) => {
    const eventData = data.find(item => item.date === date.getDate().toString());
    return (
      <Story>
      <div className='story1'>
        {eventData ? eventData.title : ''}
      </div>
      <div className='story2'>
      {eventData ? `미션 :${eventData.percent}` : ''}
      </div>
      </Story>
    );};

  return (
    <Container>
      <h1>선택된 날짜: {date.toDateString()}</h1>
        <StyledCalendar onChange={onChange} value={date} tileContent={tileContent} formatDay={(locale, date) => dayjs(date).format('DD')}/> 
    </Container>
  );
  };
  
  export default MyCalender;