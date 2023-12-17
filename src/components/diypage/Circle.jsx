import React, { useEffect, useState } from 'react';
import styled,{keyframes} from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(
    ${props => props.progress < 49 ? '#dfbd00' : '#95D17F'} ${props => props.progress * 3.6}deg,
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


const CircleProgressBar = ({progress, dogimg }) => {
  const [progress1, setProgress1] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = progress1 >= progress ? progress : progress1 + 1;
      setProgress1(newProgress);
    }, 4); // Change the interval duration as needed

    return () => clearTimeout(timer);
  }, [progress1,progress]);

  return (
    <Container progress={progress1} >
      <img src={dogimg} className='dogFootImage'/>
    </Container>

  );
}

export default CircleProgressBar;