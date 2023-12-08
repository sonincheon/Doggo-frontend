import React, { useState } from "react";
import styled from "styled-components";
import dogfoot from '../img/dogfoot.png';
import { storage } from "./FireBase"

const ModalStyle = styled.div`
     /* 모달 기본 스타일 */
     .modal {
        display: none;  // 초기에는 숨김
        position: fixed; // 스크롤에 따라 움직이지 않음
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99; // 다른 모달보다 위에 위치
        background-color: rgba(0, 0, 0, 0.6); // 배경색 및 투명도 조절
 // 테두리 추가
    }

    /* 모달이 열릴 때의 스타일 */
    .openModal {
        display: flex; // 모달이 보이도록 함
        align-items: center;
        animation: modal-bg-show 0.8s; // 배경이 스르륵 열리는 효과
 // 테두리 추가
    }

    /* 닫기 버튼 스타일 */
    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
 // 테두리 추가
    }

    /* 모달 컨텐츠 스타일 */
    section {
        width: 90%;
        max-width: 700px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: white;
        animation: modal-show 0.3s; // 모달이 스르륵 열리는 효과
        overflow: hidden;
 // 테두리 추가
    }

    /* 모달 헤더 스타일 */
    section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #776B5D;
        color: white;
        font-weight: 700;
 // 테두리 추가
    }

    /* 모달 닫기 버튼 스타일 */
    section > header button {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: white;
        background-color: transparent;
 // 테두리 추가
    }

    /* 모달 내용 스타일 */
    section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
 // 테두리 추가
    }

    /* 모달 푸터 스타일 */
    section > footer {
        padding: 12px 16px;
        text-align: right;
 // 테두리 추가
    }

    /* 모달 버튼 스타일 */
    section > footer button {
        padding: 6px 12px;
        color: #fff;
        background-color: #45474B;
        border-radius: 5px;
        font-size: 13px;
 // 테두리 추가
    }

    /* 모달 열릴 때의 애니메이션 효과 */
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
     // 테두리 추가
        }
        to {
            opacity: 1;
            margin-top: 0;
     // 테두리 추가
        }
    }

    /* 모달 배경 열릴 때의 애니메이션 효과 */
    @keyframes modal-bg-show {
        from {
            opacity: 0;
     // 테두리 추가
        }
        to {
            opacity: 1;
     // 테두리 추가
        }
    }
`;



const PetInfo1 = styled.div`
    position: relative;
    width: 410px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    margin-right: 10px;
    z-index: 1;

    .DogFootImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const PetProfile = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
    border-radius: 100%;
    background-color: #FFEED9;
    margin-left: 10px;
`;

const PetInfo2 = styled.div`
    z-index: 1;
`;

const PetInfo3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    align-items: center; 
    padding: 7px 0px 5px 7px;
`;

const PetSign = styled.input`
    width: 300px;
    height: 27px;
`;



const Petmodal = (props) => {
    const {open, confirm, type, close, name, gender, Type, age, img, sign} = props;
    
    // &times; 는 X표 문자를 의미
    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
                {open && 
                    <section>
                        <header>
                           반려동물 정보 수정 
                        </header>
                            <main style={{display:'flex', justifyContent: 'center'}}>
                            <PetProfile src={img}/>
                                <PetInfo1>
                                    <img src={dogfoot} alt="Dog Foot" className="DogFootImage" />
                                        <PetInfo2>
                                            <PetInfo3>
                                            이름 : <PetSign defaultValue={name}/>
                                            </PetInfo3>
                                            <PetInfo3>
                                            성별 : <PetSign defaultValue={gender}/>
                                            </PetInfo3>
                                            <PetInfo3>
                                            나이 : <PetSign defaultValue={age}/>
                                            </PetInfo3>
                                            <PetInfo3>
                                            종 : <PetSign defaultValue={Type}/>
                                            </PetInfo3>
                                            <PetInfo3>
                                            특이사항 : <PetSign defaultValue={sign}/>
                                            </PetInfo3>
                                        </PetInfo2>                              
                                </PetInfo1>                                                                                                                    
                            </main>
                        <footer>
                            
                            {type && 
                            <button 
                            onClick={confirm}>수정</button>}
                            <button onClick={close}>취소</button>
                        </footer>
                    </section>
                }
            </div>
        </ModalStyle>
    );
};

export default Petmodal;