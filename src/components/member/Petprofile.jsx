import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import {ReactComponent as Footimg } from "../../img/Group 50.svg"

const BoxContent = styled.div`
    border: 1px solid black;
    width: 780px;
    height: 800px;
    background-color: #D9D9D9;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const BoxTitle = styled.div`
    font-size: 45px;
    margin-bottom: 1rem;
`;

const BoxContent1 = styled.div`
    width: 770px;
    height: 220px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const PetProfile = styled.img`
    width: 220px;
    height: 220px;
    border: 1px solid black;
    border-radius: 100%;
    background-color: #FFEED9;
    margin-left: 10px;
`;

const PetInfo1 = styled.div`
    width: 500px;
    height: 220px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin-right: 10px;
    .PetSign{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 1rem;
        margin-left: 1rem; 
    }
`;

const PetInfo2 = styled.div`
    border: 1px solid black;
`;

const PetInfo3 = styled.div`
    border: 1px solid black;
    height: 207px;

`;

const Btn = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #776B5D;
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
    background-color: #776B5D;
    box-sizing: border-box;
    vertical-align: bottom;
    margin-left: 5px;
`;

const Petprofile = () => {

    const pet = [
        {
            image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_200540280.jpg?alt=media&token=dfcfa49a-1af5-4a43-b196-8a1086d62f20",
            name : "팡이",
            gender : "여",
            age : "11살",
            type : "진돗개",
            sign : "예쁘고 귀여움"
        },
        {
            image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_195836703_03.jpg?alt=media&token=ca122b86-bd5d-44c8-85d4-d48351c61a20",
            name : "멍순이",
            gender : "여",
            age : "7살",
            type : "믹스견",
            sign : "멋지고 귀여움"
        },
        {
            image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_195836703_02.jpg?alt=media&token=23f3d9af-cfa4-420b-9a86-3987e098c899",
            name : "멍돌이",
            gender : "남",
            age : "10살",
            type : "믹스견",
            sign : "잘생기고 귀여움"
        },
        {
            image : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KakaoTalk_20231205_204831226.jpg?alt=media&token=14c3e490-bce0-46a4-b640-5be6e5e738e5",
            name : "팡돌이",
            gender : "남",
            age : "8살",
            type : "진돗개",
            sign : "멋지고 귀여움"
        },
    ]




  return (
        <div style={{marginLeft:'1rem', border:'1px solid black'}}>
            <BoxTitle>PET PROFILE</BoxTitle>
            <BoxContent>
            {pet.map(pet => (
                <BoxContent1>
                    <PetProfile src={pet.image}/>
                    <PetInfo1>
                        <Footimg/>
                            <PetInfo2>
                                <div className="PetSign">이름 : {pet.name}</div>
                                <div className="PetSign">성별 : {pet.gender}</div>
                                <div className="PetSign">나이 : {pet.age}</div>
                                <div className="PetSign">종 : {pet.type}<Btn2>도감 보기</Btn2></div>
                                <div className="PetSign">특이사항 : {pet.sign}</div>
                            </PetInfo2>
                        <PetInfo3>
                            <Btn>수정</Btn>
                        </PetInfo3>
                    </PetInfo1>
                </BoxContent1>
                ))}
                <BoxContent1>
                <Footimg style={{width:'220px', height:'220px', marginLeft:'10px'}}/>
                    <PetInfo1>
                            <PetInfo2>
                                <div className="PetSign">더 많은 친구들을 추가해보세요!</div>
                            </PetInfo2>
                        <PetInfo3>
                            <Btn>추가</Btn>
                        </PetInfo3>
                    </PetInfo1>
                </BoxContent1>
            </BoxContent>
        </div>

  );
};
export default Petprofile;