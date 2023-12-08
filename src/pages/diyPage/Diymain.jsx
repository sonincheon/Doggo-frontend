import HouseBtn from "../../components/HouseBtn";
import { Center } from "../../components/PublicStyle";
import MyCalender from "../../components/diypage/Calender";
import styled from "styled-components";
import Eventbox from "../../components/diypage/Eventbox";

const Btween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;
`;



const Diymain = () =>{

    return(
        <>
        <HouseBtn/>
        <Btween>
        <MyCalender/>
        <Eventbox/>
        </Btween>
        </>
    )
}

export default Diymain;