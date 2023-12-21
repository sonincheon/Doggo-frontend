import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosApi from "../../api/Axios";
import { type } from "@testing-library/user-event/dist/type";

const SellBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  .box1 {
    display: flex;
    height: 480px;
    width: 340px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    flex-direction: column;
    box-shadow: 0 0 8px black;
    @media (max-width: 1280px) {
      height: 350px;
      width: 280px;
    }
    @media (max-width: 768px) {
      height: 600px;
      width: 470px;
      margin-top: 20px;
    }
  }
  .box2 {
    display: flex;
    height: 70%;
    width: 90%;
    background-color: white;
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 1.3em;
      font-weight: bold;
      color: #000000;
      padding: 20px;
    }
    ol {
      font-size: 16px;
      list-style: circle;
      line-height: 40px;
      color: #000000;
    }
    .selectBox {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 63%;
      height: 40px;
      border-radius: 5px;
      font-size: 15px;
      background-color: #333333;
      color: white;
    }
    @media (max-width: 1280px) {
      h1 {
        font-size: 1em;
      }
      ol {
        line-height: 24px;
        font-size: 0.7em;
      }
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
      }
      ol {
        line-height: 50px;
        font-size: 1.4em;
      }
    }
  }
  .box3 {
    display: flex;
    height: 20%;
    width: 100%;
    background-color: #f95001;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    h1 {
      font-size: 2em;
      color: white;
      padding: 10px;
    }
    p {
      font-size: 1em;
      color: white;
    }

    @media (max-width: 1280px) {
      h1 {
        font-size: 1.6em;
      }
      p {
        font-size: 0.7em;
      }
      @media (max-width: 768px) {
        h1 {
          font-size: 2.4em;
        }
        p {
          font-size: 1.2em;
        }
      }
    }
  }
`;

const PatDogBtn = styled.button`
  width: 80px;
  height: 30px;
  margin: 4px;
  background-color: ${(props) => (props.clicks ? "#878787" : "#3e3e3e")};
  color: ${(props) => (!props.clicks ? "white" : "black")};
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff5f0e;
  }
  @media (max-width: 768px) {
    font-size: 1em;
    width: 100px;
    height: 35px;
  }
`;

const QuickMenu = (props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [dogBtn, setDogBtn] = useState(false);
  const [catBtn, setCatBtn] = useState(false);
  const [feedId, setFeedId] = useState();
  const { title, list1, list2, list3, list4, title2, dataList } = props;

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setFeedId(e.target.value);
  };

  const dogClick = () => {
    props.onSelected("DOG");
    setDogBtn(true);
    setCatBtn(false);
  };

  const catClick = () => {
    props.onSelected("CAT");
    setDogBtn(false);
    setCatBtn(true);
  };

  const payClick = () => {
    navigate(`/quick/sell/${feedId}/${title}`);
  };

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
              <PatDogBtn onClick={dogClick} clicks={!dogBtn}>
                강아지
              </PatDogBtn>
              <PatDogBtn onClick={catClick} clicks={!catBtn}>
                고양이
              </PatDogBtn>
            </span>
            <select
              onChange={handleSelect}
              value={selected}
              className="selectBox"
              name="선택상자"
            >
              <option className="selected" value="">
                옵션 선택
              </option>
              {dataList &&
                dataList.map((data, index) => (
                  <option key={index} value={data.feedId}>
                    {data.feedName} {data.feedInfo} {data.feedPrice}{" "}
                  </option>
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
