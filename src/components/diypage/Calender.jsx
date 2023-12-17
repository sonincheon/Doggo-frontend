import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import dayjs from 'dayjs';
import AxiosApi from '../../api/Axios';
import { PayContext } from '../../context/Paystore';
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


const MyCalender = (props) =>{
  const {modalOpen} =props;
  const [date, setDate] = useState(new Date());
  const [diaryData,setDiaryData]  =useState();
  const [questData,setQuestData] =useState();
  const context = useContext(PayContext);
  const {isTrue}=context;

  const selectedDate =(date) =>{
    const nextDay = new Date(date); // date를 변경하지 않고 새로운 객체를 생성합니다.
    nextDay.setDate(nextDay.getDate() + 1); // 다음 날짜로 설정합니다.
    return nextDay.toISOString().split('T')[0]; // ISO 형식의 날짜를 반환합니다.
  }

  const onChange = (seldate) => {
    props.onSelected(seldate);
    setDate(seldate);
  };


    // 선택된 날짜를 YYYY-MM-DD 형식으로 변환
    useEffect(() => {
      const CalenderData = async () => {
        try{
          const res = await AxiosApi.CalenderQuest();
          if (res.status === 200){
            console.log(res.data)
            setDiaryData(res.data)
            }else{
              alert("왜안되니2222")
            }}catch(e){
              console.warn(e);
            }
        try{
          const res1 = await AxiosApi.CalenderDiary();
          if (res1.status === 200){
              console.log(res1.data)
              setQuestData(res1.data)
              }else{
                alert("왜안되니11111111")
              }}catch(e){
                console.warn(e);
            }
      }
      CalenderData();
    }, [date,isTrue]);


  const tileContent = ({ date }) => {  
    const formattedDate =selectedDate(date); // 날짜를 원하는 형식으로 포맷팅하는 함수
    const diaryDatas = diaryData ? (diaryData[formattedDate] || "") : "";
    const questDatas = questData ? (questData[formattedDate] || "") : "";

    return (
      <Story>
      <div className='story1'>
        {diaryDatas ? diaryDatas : ''}
      </div>
      <div className='story2'>
      {questDatas ? `미션 :${questDatas}%` : ''}
      </div>
      </Story>
    );
  };

  return (
    <Container>
        <StyledCalendar  onChange={onChange} value={date} tileContent={tileContent} formatDay={(locale, date) => dayjs(date).format('DD')}/> 
    </Container>
  );
  };
  
  export default MyCalender;