import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleProgressBar from "./Circle";
import Slider from "react-slick";
import QuistModal from "../../utill/Quistmodal";
import AxiosApi from "../../api/Axios";
import Diary from "./Diary";
import { PayContext } from "../../context/Paystore";


const Block =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 37%;
    height: 600px;
    border-radius: 5px;
    background-color: #333333;
    padding-bottom: 2%;
    @media (max-width: 768px) {
    width: 100%;
  }
    h1{
        padding: 3%;
        height: 30px;
        font-size: 1.3em;
        color:#ff6f2c;
        font-weight: bold;
    }
    h2{
        padding: 3%;
        height: 30px;
        font-size: 1.1em;
        color:#ffffff;
        font-weight: bold;
    }
  .box1{
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 35%;
    background-color: white;
    border-radius: 5px;
    
  }
  .daybox{
    display: flex;
    justify-content: end;
    align-items: center;
    width: 90%;
    height: 10%;
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

const Eventbox =(props)=>{
  const {day}=props;
  const [quest,setQuest] =useState([]);
  const [gender,setGender]=useState("");
  const [petList,setPetList]=useState([]);
  const [questList,setQuestList] =useState([]);
  const [age,setAge]=useState("");
  const [sign,setSign]=useState("");
  const [name,setName]=useState("");
  const [petId,setPetId]=useState();
  const [petimg,setPetimg]=useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const context = useContext(PayContext);
  const {setIsTrue}=context;
  const closeModal = () => {
    setModalOpen(false);
    setIsTrue((prev)=>!prev);
  };
  const circleClick=(name,petimg,gender,age,sign,id)=>{
    setGender(gender);
    setAge(age);
    setSign(sign);
    setPetimg(petimg);
    setName(name);
    setPetId(id)
    quistClick(id);
    setModalOpen(true);
    setIsTrue((prev)=>!prev);
  }

  useEffect(() => {
    const petGet = async () => {
      setQuestList([]);
      try {
        const resp = await AxiosApi.petGet(window.localStorage.getItem("email"));
        if (resp.status === 200) {
          console.log(resp.data);
          setPetList(resp.data); 
          for(let item of resp.data){
            try{
          const res = await AxiosApi.QuestDetail(item.id,day);
          console.log(res.data);
          setQuestList(plusList => plusList.concat(res.data));
            }catch (e) {
              console.log("수행 데이터가없습니다");
            }
        }
        }
      } catch (e) {
        console.error(e);
      }
    }

    petGet();
  }, [day,modalOpen]);

  const data ={
    quest1 : false,
    quest2 : false,
    quest3 : false,
    quest4 : false,
    quest5 : false,
  }


  const quistClick= async(id) => {
    console.log(id,day)
    
      try {
        const resp = await AxiosApi.QuestDetail(id,day);
        if (resp.status === 200) {
          console.log(resp.data);
          setQuest(resp.data);
          setIsTrue((prev)=>!prev);
        }
      } catch (e) {
        setQuest(data);
        console.log("데이터가 없습니다.");
        
      }
  };
    const calculateQuestPercent = (id) => {
      const listItem = questList.find((item) => item.petId === id);
      if (!listItem) {
        return 0;
      }
      let count = 0;
      ['quest1', 'quest2', 'quest3', 'quest4', 'quest5'].forEach((quest) => {
        if (listItem[quest] === true) {
          count++;
        }
      });

      return count * 20;
    };


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
            <div className="daybox"><h2>{day} DIARY</h2></div>
        <div className="box1">
        <h1>💡금일 미션💡</h1>
        <div className="subbox">
          <div className="slidebox">
            <Slider {...settings}>
            {petList.map((pet,index) => (
              <div key={index} className="circlebox" onClick={()=>circleClick(pet.petName,pet.imageLink,pet.gender,pet.birthDate,pet.detail,pet.id)}>
                <CircleProgressBar   progress={calculateQuestPercent(pet.id)} dogimg={pet.imageLink}/>
              </div>
            ))}
            </Slider>
          </div>
        </div>
        </div>
        <Diary day={day}/>
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
          id={petId}
          day={day}
          quest={quest}
        />
        </>
    );
};

export default Eventbox;