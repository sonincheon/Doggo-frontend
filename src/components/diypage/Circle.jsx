import React, { useEffect, useState } from 'react';
import styled,{keyframes} from 'styled-components';
import defaultDogImg from '../../img/footer.png';

const getColor = (progress) => {
  if (progress < 20) {
    return '#ff3737'; // 30 미만일 때 빨강
  } else if (progress < 59) {
    return '#e1a12b'; // 60 이하일 때 주황
  } else {
    return '#13b713'; // 그 외(60 이상)에는 녹색
  }
};

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: ${(props) => (props.type ? "none" : "2px solid #d7d7d7")};
  background: conic-gradient(
    ${props => getColor(props.progress)} ${props => props.progress * 3.6}deg,
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
        border:${(props) => (props.type ? "none" : "2px solid #d7d7d7")};
    }
    &+&{
        margin: 0 10px;
    }
`;


const CircleProgressBar = ({progress, dogimg, type }) => {
  const [progress1, setProgress1] = useState(0);
  const [imageSrc,setImageSrc] =useState("");
  useEffect(() => {
    setImageSrc(dogimg);
    const timer = setTimeout(() => {
      const newProgress = progress1 >= progress ? progress : progress1 + 1;
      setProgress1(newProgress);
    }, 4); // Change the interval duration as needed

    return () => clearTimeout(timer);
  }, [progress1,progress]); 

  const handleImageError = () => {
    setImageSrc(defaultDogImg);
  };

  return (
    <Container progress={progress1} type={type} >
      <img src={imageSrc} onError={handleImageError} className='dogFootImage' />
    </Container>

  );
}

export default CircleProgressBar;