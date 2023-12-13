import { Center } from "../../components/PublicStyle";
import styled, { css } from "styled-components";
import Myprofile from "../../components/member/Myprofile";
import Petprofile from "../../components/member/Petprofile";

const Container = styled.div`
  width: 1200px;
  display: flex;
`;

const MyPage = () => {
  return (
    <Center>
      <Container>
        <div className="Box1">
          <Myprofile />
        </div>
        <div className="Box2">
          <Petprofile />
        </div>
      </Container>
    </Center>
  );
};

export default MyPage;
