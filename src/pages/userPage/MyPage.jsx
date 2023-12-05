import { Center } from "../../components/PublicStyle";
import styled, { css } from "styled-components";
import Myprofile from "../../components/member/Myprofile";
import Petprofile from "../../components/member/Petprofile";

const Container = styled.div`
    border: 1px solid black;
    width: 1200px;
    display: flex;
`;

const Box1 = styled.div`
    border: 1px solid black;
`;

const Box2 = styled.div`
    border: 1px solid black;
`;

const MyPage = () =>{

    return(
        <Center>
        <Container>
            <Box1>
                <Myprofile />
            </Box1>
            <Box2>
                <Petprofile/>

            </Box2>
        </Container>
        </Center>
    )
}

export default MyPage;