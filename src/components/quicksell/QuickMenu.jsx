import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const SellBox =styled.div`

    .box1{
        display: flex;
        height: 450px;
        width: 300px;
        background-color: #F3EEEA;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-shadow: 0 0 2px black;
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
            line-height: 40px;
            color: #776B5D;
        }
        .selectBox{
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            width: 200px;
            height: 40px;
            border-radius: 10px;
            font-size: 15px;
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
 
            color: white;
            padding: 10px;
        }
        p{
            font-size: 15px;

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
    &:hover{
        background-color: #978e80;
    }
`;




const QuickMenu = (props) =>{
    const navigate = useNavigate();
    const {title,list1,list2,list3,list4,optional,navigates,title2} =props;
    // optional 데이타 
    // navigate 이동경로 예비


    return(
        <>
        <SellBox>
        <div className="box1">
        <div className="box2">
            <h1>{title}</h1>
            <ol>
                <li>{list1}</li>
                <li>{list2}</li>
                <li style={{color:"red"}}>{list3}</li>
                <li>{list4}</li>
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
        <div className="box3" onClick={()=>navigate("/quick/sell")}>
            <h1>{title2}</h1>
            <p>구독하기</p>
        </div>
        </div>
        </SellBox>
        </>
    )
}

export default QuickMenu;