import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Usermodal from "../../utill/Usermodal";
import Pwdmodal from "../../utill/Pwdmodal";



const BoxContent = styled.div`
    width: 400px;
    height: 800px;
    background-color: #D9D9D9;
    border-radius: 10px;
`;

const BoxTitle = styled.div`
    font-size: 45px;
    margin-bottom: 1rem;
`;

const BoxContent1 = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BoxContent2 = styled.div`
    height: 410px;
    margin-top: 10px;
`;

const Profile = styled.img`
    height: 250px;
    width: 250px;
    border-radius: 100%;
    background-color: #FFEED9;
    align-items: center;
    margin-bottom: 1rem;
`;

const Btn = styled.button`
    width: 75px;
    height: 30px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: #776B5D;
    box-sizing: border-box;
    vertical-align: bottom;
    margin-right: 5px;
`;

const InputBox = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    justify-content: space-between;
    padding-left: 5px;
`;

const Input = styled.div`
    width: 240px;
    height: 40px;
    border-radius: 10px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`;

const Btn1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 190px;
`;

const Btn2 = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: bold;
    color: white;
    background-color: #776B5D;
    box-sizing: border-box;
    vertical-align: bottom;
    margin-top: 8px;
`;


const Myprofile = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [headerName, setHeaderName] = useState("닉네임 변경");
    const [bodyName, setBodyName] = useState("닉네임");
    const [bodyContent, setBodyContent] = useState("");
    const [modalOpen1, setModalOpen1] = useState(false);
    const [password, setPassword] = useState("");

    const closeModal = () => {
      setModalOpen(false);
    };

    const closeModal1 = () => {
        setModalOpen1(false);
      };

    const openClick =(Name, content, bodyConetent)=>{
        setHeaderName(Name);
        setModalOpen(true);
        setBodyName(content);
        setBodyContent(bodyConetent);
    };

    const openClick1 = (Password) => {
        setModalOpen1(true);
        setPassword(Password);
    }

    const member = [
        {
            Img : "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
            Name : "손인천",
            Nick : "신대방 송강",
            Email : "in1000s@naver.com",
            Address : "서울특별시 신림동 신사로 12길 32",
            Tel : "010-9118-4893", 
            Password : "khb3187923"  
        }
    ]

  return (
        <div>
            <BoxTitle>MY PROFILE</BoxTitle>
            <BoxContent>
                <BoxContent1>
                    <Profile src={member[0].Img}/>
                    <Btn onClick={()=>openClick("프로필 변경", "프로필")}>
                        수정
                    </Btn>
                </BoxContent1>
                    <div style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', marginBottom:'1rem'}}>{member[0].Name}님</div>
                <BoxContent2>
                    <InputBox>
                        닉네임 :
                        <div style={{display:'flex'}}>
                            <Input>
                                {member[0].Nick}
                            </Input> 
                                <Btn onClick={()=>openClick("닉네임 변경", "닉네임", member[0].Nick)}>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox style={{marginBottom : '1rem'}}>
                        이메일 :
                        <div style={{display:'flex'}}>
                            <Input>
                                {member[0].Email}
                            </Input> 
                                <Btn onClick={()=>openClick("이메일 변경", "이메일", member[0].Email)}>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox>
                        주소 :
                        <div style={{display:'flex'}}>
                            <Input>
                                {member[0].Address}
                            </Input> 
                                <Btn onClick={()=>openClick("주소 변경", "주소", member[0].Address)}>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox>
                        전화번호 :
                        <div style={{display:'flex'}}>
                            <Input>
                                {member[0].Tel}
                            </Input> 
                                <Btn onClick={()=>openClick("전화번호 변경", "전화번호", member[0].Tel)}>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <Btn1>
                        <Btn2 onClick={() =>openClick1(member[0].Password)}>
                            비밀번호 변경
                        </Btn2>
                        <Btn2>
                            1대1 문의하기
                        </Btn2>
                        <Btn2>
                            구매 내역 조회
                        </Btn2>
                    </Btn1>
                </BoxContent2>
            </BoxContent>
            <Usermodal type={1} open={modalOpen} close={closeModal}  header={headerName} name={bodyName} detail={bodyContent} >
            </Usermodal>
            <Pwdmodal type={1} open={modalOpen1} close={closeModal1} detail={password}>
            </Pwdmodal>



        </div>

  );
};
export default Myprofile;