import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
    .modal {
        display: none;  // 숨겨진 상태로 시작
        position: fixed; // 스크롤해도 동일한 위치
        top: 0;  // 화면 전체를 덮도록 위치
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99; // 다른 모달 보다 위에 위치하도록 함
        background-color: rgba(0, 0, 0, 0.6); // 배경색을 검정으로 하고 투명도 조절
    }
    .openModal {
        display: flex; // 모달이 보이도록 함
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
    }
    section {
        width: 90%;
        max-width: 650px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    section > header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #EBE3D5;
        font-weight: 700;
    }

    section > header button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #45474B;
        background-color: transparent;
    }
    section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }
    section > footer {
        padding: 12px 16px;
        text-align: right;
    }
    section > footer button {
        padding: 6px 12px;
        color: #fff;
        background-color: #45474B;
        border-radius: 5px;
        font-size: 13px;
    }
    main{
        display: flex;
        height: 300px;

        .dogFootImage {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    }

    .proBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:40%;
        height: 100%;

        div{
            padding-top: 10px;
            width: 80%;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            overflow: hidden;
            p{
                font-size: 0.9em;
                font-weight: bold;
                line-height: 20px;
            }
        }
    }
    .qList{
        width:60%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        display: block;
        align-items: center;
    }

    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Card=styled.div`
    display: flex;
    width: 95%;
    height: 85px;
    box-shadow: 0px 0px 2px black;
    border-radius: 10px;
    margin: 10px auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    h1{
        height: 30%;
        font-size: 0.8em;
        font-weight: bold;
        color:grey;
    }
    h2{
        line-height: 60px;
        font-size: 1.2em;
        font-weight: bold;
        color: #3636f3;
    }
    img{
        width: 20%;

    }
`;



const DogCare=[
    {
        title1:"반려동물의 홈케어",
        title2:"양치하기",
        img:"https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/careImg%2Ffree-icon-brushing-teeth-5938073.png?alt=media&token=899a7b7a-8f28-4c61-ad5d-c2d6aa890ecc"
    },
    {
        title1:"스트레스 해소, 문제행동개선",
        title2:"산책하기",
        img:"https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/careImg%2Fdog-walking.png?alt=media&token=08953e1f-3c29-41bc-85f7-e88c0ec813e9"
    },
    {
        title1:"매일 반려동물과 15분교감",
        title2:"교감하기",
        img:"https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/careImg%2Fanimal-care.png?alt=media&token=34adf8d5-4fab-4719-932c-205582fd453e"
    },
    {
        title1:"아프지 않게 지켜줄게",
        title2:"1분 건강체크",
        img:"https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/careImg%2Ffree-icon-health-check-4773288.png?alt=media&token=7f73a21b-5cbd-4dc5-99c2-63cb1acd8e2f"
    },
    {
        title1:"털 난리에서 해방",
        title2:"빗질하기",
        img:"https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/careImg%2Fhairstyle.png?alt=media&token=c473b745-ed7b-49b7-b683-472884df1e2f"
    },

]

const QuistModal = (props) => {
    const {open, confirm, close,petGender,petSign,petAge,petName,petImg} = props;
    // &times; 는 X표 문자를 의미
    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
                {open && 
                    <section>
                        <header>
                        {petName} 의 (날짜) 일정 
                            <button onClick={close}>
                                &times;  
                            </button>
                        </header>
                        <main>
                        <div className="proBox">
                            <img src={petImg} className='dogFootImage'/>
                            <div>
                            <p>이름 : {petName}</p>
                            <p>나이 : {petAge}</p>
                            <p>성별 : {petGender}</p>
                            <p>특징 : {petSign}</p>
                            </div>
                        </div>
                        <div className="qList">
                        {DogCare.map(dog => (
                        <Card>
                            <div>
                            <h1>{dog.title1}</h1>
                            <h2>{dog.title2}</h2>
                            </div>
                            <img src={dog.img} alt="petcareimg" />
                        </Card>
                        ))}                           
                        </div>
                            </main>
                        <footer>
                            <button onClick={confirm}>SAVE</button>
                            <button onClick={close}>CANCLE</button>
                        </footer>
                    </section>
                }
            </div>
        </ModalStyle>
    );
};

export default QuistModal;