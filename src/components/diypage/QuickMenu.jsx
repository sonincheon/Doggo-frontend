import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const SellBox =styled.div`
    width: 100%;
    height: 500px;
    background-color: #EBE3D5 ;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .box1{
        display: flex;
        height: 400px;
        width: 300px;
        background-color: #F3EEEA;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box2{
        display: flex;
        height: 70%;
        width: 90%;
        background-color: #FFEED9;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
        h1{
            font-size: 25px;
            font-weight: bold;
            color: #776B5D;
            padding: 20px;
        }
        ol{
            font-size: 16px;
            list-style: circle;
            line-height: 30px;
            font-weight: bold;
            color: #776B5D;
        }
        .selectBox{
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            width: 200px;
            height: 50px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: bold;
            background-color: #776B5D;
            color: white;
        }
    }
    .box3{
        display: flex;
        height: 20%;
        width: 100%;
        background-color: #776B5D;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        h1{
            font-size: 25px;
            font-weight: bold;
            color: white;
            padding: 10px;
        }
        p{
            font-size: 15px;
            font-weight: bold;
            color: white;
        }
    }
`;

const PatDogBtn =styled.button`
    width: 80px;
    height: 30px;
    margin: 4px;
    background-color: #B0A695;
    border-radius: 10px;
    border: none;
    cursor: pointer;

`;




const QuickMenu = () =>{

    return(
        <>
        <SellBox>
        <div className="box1">
        <div className="box2">
            <h1>ONE MONTH FREE</h1>
            <ol>
                <li>멍냥 일기 작성 무제한</li>
                <li>반려동물 등록 최대 2마리</li>
                <li style={{color:"red"}}>체험판 간식 무료 배송</li>
                <li>그밖의 다양한 기능</li>
            </ol>
            <span>
            <PatDogBtn>멍이</PatDogBtn>
            <PatDogBtn>냥이</PatDogBtn>
            </span>
            <select className="selectBox" name="선택상자">
            <option className="selectBox" value=''> 옵션 선택 </option>
            <option value={1}>간식 1</option>
            <option value={2}>간식 2</option>
            <option value={3}>간식 3</option>
            <option value={4}>간식 4</option>
            </select>
        </div>
        <div className="box3">
            <h1>첫달 무료 체험</h1>
            <p>구독하기</p>
        </div>
        </div>
        </SellBox>
        </>
    )
}

export default QuickMenu;