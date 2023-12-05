import styled from "styled-components";
import { ReactComponent as House } from "../img/pet-shelter 1.svg"
import { useNavigate } from "react-router-dom";

const BackBtn = styled.button`
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #F3EEEA;
    font-weight: bold;
    font-size: 18px;
    color: #776B5D;
    cursor: pointer;
    margin-bottom: 20px;
`;


const HouseBtn = () =>{
    const navigate = useNavigate();
    return(
        <>
        <BackBtn onClick={()=>navigate("/")}><House/>House</BackBtn>
        </>
    )
}

export default HouseBtn;