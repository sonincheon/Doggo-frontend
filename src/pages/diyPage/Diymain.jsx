import { Center } from "../../components/PublicStyle";
import MyCalender from "../../components/diypage/Calender";
import styled from "styled-components";

const Btween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;



const Diymain = () =>{

    return(

        <Btween>
        <MyCalender/>
        <div></div>
        </Btween>

    )
}

export default Diymain;