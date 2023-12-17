import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as Footimg } from "../../img/Group 50.svg";
import dogfoot from "../../img/dogfoot.png";
import Petmodal from "../../utill/Petmodal";
import AxiosApi from "../../api/Axios";

const BoxContent = styled.div`
  width: 780px;
  height: 110vh;
  background-color: #d9d9d9;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 13px; // 스크롤바의 너비
  }

  &::-webkit-scrollbar-thumb {
    background-color: #776b5d; // 스크롤바 색상
    border-radius: 7px; // 스크롤바 모양 (모서리 둥글게)
  }

  &::-webkit-scrollbar-track {
    background-color: #b0a695; // 스크롤바 색상
    border-radius: 7px; // 스크롤바 모양 (모서리 둥글게)
    // F3EEEA, EBE3D5, FFEED9, B0A695
  }
`;

const BoxTitle = styled.div`
  font-size: 45px;
  margin-bottom: 1rem;
`;

const BoxContent1 = styled.div`
  width: 770px;
  height: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const PetProfile = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 100%;
  background-color: #ffeed9;
  margin-left: 20px;
`;

const PetInfo1 = styled.div`
  position: relative;
  width: 500px;
  height: 220px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  z-index: 1;

  .PetSign {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .DogFootImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PetInfo2 = styled.div`
  z-index: 1;
  .PetSign {
    display: flex;
  }
`;

const PetInfo3 = styled.div`
  height: 207px;
  display: flex;
  flex-direction: column;
`;

const Btn = styled.button`
  width: 75px;
  height: 30px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: #776b5d;
  box-sizing: border-box;
  vertical-align: bottom;
  margin-right: 5px;
`;

const Btn2 = styled.button`
  width: 90px;
  height: 22px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: #776b5d;
  box-sizing: border-box;
  vertical-align: bottom;
  margin-left: 5px;
`;

// 나이 계산 함수
const calculateAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  const ageInDays = (currentDate - birthDate) / oneDayInMilliseconds;

  const age = Math.floor(ageInDays / 365);

  return age;
};

const Petprofile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petSign, setPetSign] = useState("");
  const [petImg, setPetImg] = useState("");
  const [petType, setPetType] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const openClick = (name, gender, age, breed, sign, img, Type) => {
    setModalOpen(true);
    setPetName(name);
    setPetAge(age);
    setPetGender(gender);
    setPetSign(sign);
    setPetBreed(breed);
    setPetImg(img);
    setPetType(Type);
  };

  const [list, setList] = useState([]);

  const petGet = async () => {
    try {
      const resp = await AxiosApi.petGet(window.localStorage.getItem("email"));
      if (resp.status === 200) {
        setList(resp.data);
      }
    } catch (e) {
      console.error(e);
      alert("에러 발생");
    }
  };

  useEffect(() => {
    petGet();
  }, [modalOpen]);

  const Click = async () => {
    console.log(list);
    console.log(petType);
  };

  return (
    <div style={{ marginLeft: "1rem" }}>
      <BoxTitle>PET PROFILE</BoxTitle>
      <BoxContent>
        {list.map((list, index) => (
          <BoxContent1 key={index}>
            <PetProfile src={list.imageLink} />
            <PetInfo1>
              <img src={dogfoot} alt="Dog Foot" className="DogFootImage" />
              <PetInfo2>
                <div className="PetSign">이름 : {list.petName}</div>
                <div className="PetSign">성별 : {list.gender}</div>
                <div className="PetSign">
                  나이 : {calculateAge(list.birthDate)} 세 ({list.birthDate}{" "}
                  출생)
                </div>
                <div className="PetSign">
                  종 : {list.breed}
                  <Btn2 onClick={Click}>도감 보기</Btn2>
                </div>
                <div className="PetSign">특이사항 : {list.detail}</div>
                <div className="PetSign">
                  {list.animalType &&
                    (list.animalType.animalType === "DOG"
                      ? "강아지"
                      : "고양이")}
                </div>
              </PetInfo2>
              <PetInfo3>
                <Btn
                  style={{ marginBottom: "10px" }}
                  onClick={() =>
                    openClick(
                      list.petName,
                      list.gender,
                      list.birthDate,
                      list.breed,
                      list.detail,
                      list.imageLink,
                      list.animalType.animalType
                    )
                  }
                >
                  수정
                </Btn>
                <Btn onClick={() => openClick()}>삭제</Btn>
              </PetInfo3>
            </PetInfo1>
          </BoxContent1>
        ))}
        <BoxContent1>
          <Footimg
            style={{ width: "220px", height: "220px", marginLeft: "20px" }}
          />
          <PetInfo1>
            <img src={dogfoot} alt="Dog Foot" className="DogFootImage" />
            <PetInfo2>
              <div className="PetSign">더 많은 친구들을 추가해보세요!</div>
            </PetInfo2>
            <PetInfo3>
              <Btn onClick={() => openClick()}>추가</Btn>
            </PetInfo3>
          </PetInfo1>
        </BoxContent1>
      </BoxContent>
      <Petmodal
        type={1}
        open={modalOpen}
        close={closeModal}
        name={petName}
        gender={petGender}
        age={petAge}
        breed={petBreed}
        img={petImg}
        sign={petSign}
        Type={petType}
      ></Petmodal>
    </div>
  );
};
export default Petprofile;
