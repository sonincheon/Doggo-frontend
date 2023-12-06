import styled from "styled-components";


const Block =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 37%;
    height: 600px;
    border-radius: 20px;
    background-color: #F3EEEA;
    padding-bottom: 2%;

  h1{
        padding: 3%;
        height: 30px;
        font-size: 1.3em;
        font-weight: bold;
        color:#776B5D;
    }
    h2{
        padding: 3%;
        height: 30px;
        font-size: 1.1em;
        font-weight: bold;
        color:#776B5D;
    }

  .box1{
    display: flex;
    width: 90%;
    height: 35%;
    background-color: white;
    border-radius: 20px;
    
  }
  .box2{
    display: flex;
    flex-direction: column;
    width: 90%;
    height:  50%;
    background-color: white;
    border-radius: 20px;
  }
  .daybox{
    display: flex;
    justify-content: end;
    align-items: center;
    width: 90%;
    height: 10%;
  }
  .textbox{
    width: 80%;
    height: 80%;
    border: 1px solid black;
  }
`;

const Eventbox =()=>{


    return(
        <>
        <Block>
            <div className="daybox"><h2>2023년 7월 14일 일지</h2></div>
        <div className="box1">
        <h1>일일한정미션</h1>
        </div>

        <div className="box2">
        <h1>멍냥일기</h1>
            <div className="textbox">
                <textarea ></textarea>
            </div>
        </div>
            
        </Block>
        </>
    );
};

export default Eventbox;