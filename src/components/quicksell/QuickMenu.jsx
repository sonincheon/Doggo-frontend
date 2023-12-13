import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";
import { type } from "@testing-library/user-event/dist/type";

const SellBox = styled.div`
  .box1 {
    display: flex;
    height: 450px;
    width: 300px;
    background-color: #f3eeea;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 2px black;
  }
  .box2 {
    display: flex;
    height: 70%;
    width: 90%;
    background-color: #ffeed9;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 25px;
      font-weight: bold;
      color: #776b5d;
      padding: 20px;
    }
    ol {
      font-size: 16px;
      list-style: circle;
      line-height: 40px;
      color: #776b5d;
    }
    .selectBox {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 200px;
      height: 40px;
      border-radius: 10px;
      font-size: 15px;
      background-color: #776b5d;
      color: white;
    }
  }
  .box3 {
    display: flex;
    height: 20%;
    width: 100%;
    background-color: #776b5d;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    h1 {
      font-size: 25px;

      color: white;
      padding: 10px;
    }
    p {
      font-size: 15px;

      color: white;
    }
  }
`;

const PatDogBtn = styled.button`
  width: 80px;
  height: 30px;
  margin: 4px;
  background-color: ${props => props.clicks? '#b0a695' : '#978e80'};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #978e80;
  }
`;

const QuickMenu = (props) => {
  const navigate = useNavigate();
  const [selected,setSelected] =useState();
  const [dogBtn,setDogBtn]=useState(false);
  const [catBtn,setCatBtn]=useState(false);
  const [feedId,setFeedId]=useState();
  const { title, list1, list2, list3, list4, title2 ,dataList} =props;

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setFeedId(e.target.value);
  };

  const dogClick =()=>{
    props.onSelected("DOG");
    setDogBtn(true);
    setCatBtn(false);
  }

  const catClick =()=>{
    props.onSelected("CAT");
    setDogBtn(false);
    setCatBtn(true);
  }

  const payClick =()=>{
    navigate(`/quick/sell/${feedId}/${title}`);
  }

  return (
    <>
      <SellBox>
        <div className="box1">
          <div className="box2">
            <h1>{title}</h1>
            <ol>
              <li>{list1}</li>
              <li>{list2}</li>
              <li style={{ color: "red" }}>{list3}</li>
              <li>{list4}</li>
            </ol>
            <span>
              <PatDogBtn onClick={dogClick} clicks={!dogBtn}>멍이</PatDogBtn>
              <PatDogBtn onClick={catClick} clicks={!catBtn}>냥이</PatDogBtn>
            </span>
            <select 
            onChange={handleSelect}
            value={selected} 
            className="selectBox"
            name="선택상자">
              <option className="selected" value="">
                옵션 선택
              </option>
              {dataList &&
              dataList.map((data, index) => (
                <option key={index} value={data.feedId}>{data.feedName} {data.feedInfo} {data.feedPrice} </option>
                ))} 
            </select>
          </div>
          <div className="box3" onClick={payClick}>
            <h1>{title2}</h1>
            <p>구독하기</p>
          </div>
        </div>
      </SellBox>
    </>
  );
};

export default QuickMenu;
