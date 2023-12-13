import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as Footimg } from "../../img/Group 50.svg";
import dogfoot from "../../img/dogfoot.png";
import Petmodal from "../../utill/Petmodal";

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

const Petprofile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petType, setPetType] = useState("");
  const [petSign, setPetSign] = useState("");
  const [petImg, setPetImg] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const openClick = (name, gender, age, type, sign, img) => {
    setModalOpen(true);
    setPetName(name);
    setPetAge(age);
    setPetGender(gender);
    setPetSign(sign);
    setPetType(type);
    setPetImg(img);
  };

  const pet = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_200540280.jpg?alt=media&token=dfcfa49a-1af5-4a43-b196-8a1086d62f20",
      name: "팡이",
      gender: "여",
      age: "11살",
      type: "진돗개",
      sign: "겁이 많음, 예쁘고 귀여움",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231206_160745815.jpg?alt=media&token=c131d391-d1cb-48d4-93f8-7124247200a3",
      name: "순돌이",
      gender: "남",
      age: "9살",
      type: "진돗개",
      sign: "순함, 꼬리가 귀여움, 목욕할때 안도망감",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_195836703_03.jpg?alt=media&token=ca122b86-bd5d-44c8-85d4-d48351c61a20",
      name: "멍순이",
      gender: "여",
      age: "7살",
      type: "믹스견",
      sign: "멋지고 귀여움",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231206_160911844_03.jpg?alt=media&token=b582917a-d118-478f-9080-a7ffd512d2d6",
      name: "우동이",
      gender: "여",
      age: "3살",
      type: "먼치킨",
      sign: "점프를 잘함, 가끔 토끼가 됨",
    },
  ];

  return (
    <div style={{ marginLeft: "1rem" }}>
      <BoxTitle>PET PROFILE</BoxTitle>
      <BoxContent>
        {pet.map((pet) => (
          <BoxContent1>
            <PetProfile src={pet.image} />
            <PetInfo1>
              <img src={dogfoot} alt="Dog Foot" className="DogFootImage" />
              <PetInfo2>
                <div className="PetSign">이름 : {pet.name}</div>
                <div className="PetSign">성별 : {pet.gender}</div>
                <div className="PetSign">나이 : {pet.age}</div>
                <div className="PetSign">
                  종 : {pet.type}
                  <Btn2>도감 보기</Btn2>
                </div>
                <div className="PetSign">특이사항 : {pet.sign}</div>
              </PetInfo2>
              <PetInfo3>
                <Btn
                  onClick={() =>
                    openClick(
                      pet.name,
                      pet.gender,
                      pet.age,
                      pet.type,
                      pet.sign,
                      pet.image
                    )
                  }
                >
                  수정
                </Btn>
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
        Type={petType}
        img={petImg}
        sign={petSign}
      ></Petmodal>
    </div>
  );
};
export default Petprofile;
