import styled from "styled-components";

import { Center } from "../components/PublicStyle";
import HomeMain from "../components/homePage/HomeMain";

const StyledHomeMain = styled(HomeMain)`
  top: 20;
  left: 0;
  z-index: 1000;
`;

const HomePage = () => {
  return (
    <Center>
      <StyledHomeMain />
    </Center>
  );
};

export default HomePage;
