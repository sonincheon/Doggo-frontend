import { useEffect, useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleProgressBar from "./Circle";
import Slider from "react-slick";
import QuistModal from "../../utill/Quistmodal";


const Block =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 37%;
    height: 600px;
    border-radius: 20px;
    background-color: #F3EEEA;
    padding-bottom: 2%;

    h1{
        padding: 3%;
        height: 30px;
        font-size: 1.3em;
        font-weight: bold;
        color:#776B5D;
    }
    h2{
        padding: 3%;
        height: 30px;
        font-size: 1.1em;
        font-weight: bold;
        color:#776B5D;
    }
  .box1{
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 35%;
    background-color: white;
    border-radius: 20px;
    
  }
  .box2{
    display: flex;
    flex-direction: column;
    width: 90%;
    height:  50%;
    background-color: white;
    border-radius: 20px;
  }
  .daybox{
    display: flex;
    justify-content: end;
    align-items: center;
    width: 90%;
    height: 10%;
  }
  .textbox{
    width: 100%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    textarea{
      width: 90%;
      height: 80%;
      border: 2px solid #776B5D;
      border-radius: 10px;
      resize: none;
      outline-color: #b19f8b;
      padding: 2%;
    }

  }
  .subbox{
    width: 100%;
    height: 90%;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;

  }
  .slidebox{
    width: 90%;
    height: 70%;
    display: block;
    .slick-next:before {
      color: #3C3939;
      font-size: 20px;
      display: flex;
      justify-content: end;
    }
    .slick-prev:before {
      color: #3C3939;
      font-size: 20px;
      display: flex;
    }
    .slick-prev,
    .slick-next{
      width: 100px;
      height: 100px;
      top: 45%;
    }
  }
  .circlebox{
    width: 250px;
    height: 100px;
  }
`;

const pet = [
  {
      image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_200540280.jpg?alt=media&token=dfcfa49a-1af5-4a43-b196-8a1086d62f20",
      name : "팡이",
      gender : "여",
      age : "11살",
      type : "진돗개",
      sign : "겁이 많음, 예쁘고 귀여움",
      progress: "50"
  },
  {
      image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231206_160745815.jpg?alt=media&token=c131d391-d1cb-48d4-93f8-7124247200a3",
      name : "순돌이",
      gender : "남",
      age : "9살",
      type : "진돗개",
      sign : "순함, 꼬리가 귀여움, 목욕할때 안도망감",
      progress: "70"
  },
  {
    image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_195836703_03.jpg?alt=media&token=ca122b86-bd5d-44c8-85d4-d48351c61a20",
    name : "멍순이",
    gender : "여",
    age : "7살",
    type : "믹스견",
    sign : "멋지고 귀여움",
    progress: "30"
},
{
  image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_195836703_03.jpg?alt=media&token=ca122b86-bd5d-44c8-85d4-d48351c61a20",
  name : "멍순이",
  gender : "여",
  age : "7살",
  type : "믹스견",
  sign : "멋지고 귀여움",
  progress: "30"
},
]


const Eventbox =()=>{
  const [progress,setProgress] =useState(80);
  const [gender,setGender]=useState("");
  const [age,setAge]=useState("");
  const [sign,setSign]=useState("");
  const [name,setName]=useState("");
  const [petimg,setPetimg]=useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const circleClick=(name,petimg,gender,age,sign)=>{
    setGender(gender);
    setAge(age);
    setSign(sign);
    setPetimg(petimg);
    setName(name);
    setModalOpen(true);
  }



  const settings = {
    slide: "div",
    autoplay: false, // 자동 스크롤 사용 여부
    pauseOnHover: true,
    autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    infinite: false, // 무한
    dots: false, // 
    speed: 20,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    draggable: true,
    };
    
    return(
        <>
        <Block>
            <div className="daybox"><h2>2023년 7월 14일 일지</h2></div>
        <div className="box1">
        <h1>일일한정미션</h1>
        <div className="subbox">
          <div className="slidebox">
            <Slider {...settings}>
            {pet.map(pet => (
              <div className="circlebox" onClick={()=>circleClick(pet.name,pet.image,pet.gender,pet.age,pet.sign)}>
                <CircleProgressBar   progress={pet.progress} dogimg={pet.image}/>
              </div>
            ))}
            </Slider>
          </div>
        </div>
        </div>
        <div className="box2">
        <h1>멍냥일기</h1>
            <div className="textbox">
                <textarea placeholder="오늘 하루를 작성해주세요"></textarea>
            </div>
        </div>
        </Block>
        <QuistModal
          type={1}
          open={modalOpen}
          close={closeModal}
          petName={name}
          petImg={petimg}
          petGender={gender}
          petAge={age}
          petSign={sign}
        />


        </>
    );
};

export default Eventbox;