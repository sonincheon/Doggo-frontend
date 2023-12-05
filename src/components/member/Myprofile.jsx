import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";



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

const InputBox = styled.div`
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    justify-content: space-between;
    padding-left: 5px;
`;

const Input = styled.input`
    width: 240px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    margin-right: 5px;
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
  return (
        <div>
            <BoxTitle>MY PROFILE</BoxTitle>
            <BoxContent>
                <BoxContent1>
                    <Profile src="https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/man-2442565_1280.jpg?alt=media&token=59ce2c6d-1192-4bc0-bccd-013f35acb3bb"/>
                    <Btn>
                        수정
                    </Btn>
                </BoxContent1>
                    <div style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', marginBottom:'1rem'}}>손인천 님</div>
                <BoxContent2>
                    <InputBox>
                        닉네임 :
                        <div>
                            <Input>
                            </Input> 
                                <Btn>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox style={{marginBottom : '1rem'}}>
                        이메일 :
                        <div>
                            <Input>
                            </Input> 
                                <Btn>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox>
                        주소 :
                        <div>
                            <Input>
                            </Input> 
                                <Btn>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <InputBox>
                        전화번호 :
                        <div>
                            <Input>
                            </Input> 
                                <Btn>
                                    수정
                                </Btn>
                        </div>
                    </InputBox>
                    <Btn1>
                        <Btn2>
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
        </div>

  );
};
export default Myprofile;