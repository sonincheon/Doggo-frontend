import React from 'react';
import styled from 'styled-components';
import dogfoot from '../../img/footer.png'
const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(
    #95D17F ${props => props.progress * 3.6}deg,
    transparent 0deg
  );
  cursor: pointer;
  .dogFootImage {
        position: relative;
        width: 80px;
        height: 80px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    &+&{
        margin: 0 10px;
    }
`;


const CircleProgressBar = ({ progress,dogimg }) => {
  return (

    <Container progress={progress} >
      <img src={dogimg} className='dogFootImage'/>
    </Container>

  );
}

export default CircleProgressBar;