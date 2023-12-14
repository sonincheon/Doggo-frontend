import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Usermodal from "../../utill/Usermodal";
import Pwdmodal from "../../utill/Pwdmodal";
import Imgmodal from "../../utill/Imgmodal";
import AxiosApi from "../../api/Axios";

const BoxContent = styled.div`
  width: 400px;
  height: 110vh;
  background-color: #d9d9d9;
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

// const Profile = styled.img`
//     height: 250px;
//     width: 250px;
//     border-radius: 100%;
//     background-color: #FFEED9;
//     align-items: center;
//     transition: filter 0.3s ease; /* 부드러운 효과를 위한 트랜지션 속성 추가 */

//     &:hover {
//         filter: grayscale(100%) blur(4px); /* 마우스 호버 시 회색 필터 및 흐림 효과 적용 */
//     }
// `;

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
  margin-bottom: 1rem;
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
  background-color: #776b5d;
  box-sizing: border-box;
  vertical-align: bottom;
  margin-top: 8px;
`;

const Profile = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 250px;
  width: 250px;
  border-radius: 100%;
  background-color: #ffe;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease; /* 부드러운 효과를 위한 트랜지션 속성 추가 */

  ${Profile}:hover & {
    filter: grayscale(100%) blur(5px); /* 마우스 호버 시 이미지에 효과 적용 */
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white; /* 텍스트 색상 설정 */
  font-size: 25px; /* 텍스트 크기 설정 */
  font-weight: bold; /* 텍스트 굵기 설정 */
  pointer-events: none; /* 텍스트 위에 마우스 이벤트를 허용하지 않음 */
  opacity: 0; /* 초기에는 보이지 않도록 설정 */
  transition: opacity 0.3s ease; /* 투명도에 대한 부드러운 효과를 위한 트랜지션 속성 추가 */

  ${Profile}:hover & {
    opacity: 1; /* 마우스 호버 시 텍스트가 나타남 */
  }
`;

const Myprofile = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [headerName, setHeaderName] = useState("닉네임 변경");
  const [bodyName, setBodyName] = useState("닉네임");
  const [bodyContent, setBodyContent] = useState("");
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const [detail, setDetail] = useState("");

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const openClick = (Name, content, bodyConetent) => {
    setHeaderName(Name);
    setModalOpen(true);
    setBodyName(content);
    setBodyContent(bodyConetent);
  };

  const openClick1 = (Password) => {
    setModalOpen1(true);
    setPassword(Password);
  };

  const openClick2 = (img) => {
    setModalOpen2(true);
    setImage(img);
  };

  const member = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
      Name: "손인천",
      Email: "in1000s@naver.com",
      Address: "서울특별시 신림동 신사로 12길 32",
      Gender: "남",
      Birth: "2000-02-02",
      Tel: "010-9118-4893",
      Password: "son12345",
    },
  ];

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await AxiosApi.memberGet(
          window.localStorage.getItem("email")
        );
        console.log("detail.email:", response.data);
        setDetail(response.data);
        console.log("성공");
      } catch (error) {
        console.log(error);
        alert("실패");
        console.log(detail);
      }
    };
    getMember();
  }, []);

  return (
    <div>
      <BoxTitle>MY PROFILE</BoxTitle>
      <BoxContent>
        <BoxContent1>
          <Profile>
            <ProfileImage
              src={detail.memberImage}
              onClick={() => openClick2(detail.memberImage)}
            />
            <OverlayText>수정</OverlayText>
          </Profile>
        </BoxContent1>
        <div
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {detail.memberName}님
        </div>
        <BoxContent2>
          <InputBox>
            이메일 :
            <div style={{ display: "flex" }}>
              <Input>{detail.memberEmail}</Input>
            </div>
            <div style={{ width: "75px", height: "30px" }}></div>
          </InputBox>
          <InputBox>
            성별 :
            <div style={{ display: "flex" }}>
              <Input>{detail.memberGender}</Input>
              <Btn
                onClick={() =>
                  openClick("성별 변경", "성별", detail.memberGender)
                }
              >
                수정
              </Btn>
            </div>
          </InputBox>
          <InputBox>
            생년월일 :
            <div style={{ display: "flex" }}>
              <Input>{detail.memberBirth}</Input>
              <Btn
                onClick={() =>
                  openClick("생년월일 변경", "생년월일", detail.memberBirth)
                }
              >
                수정
              </Btn>
            </div>
          </InputBox>
          <InputBox>
            주소 :
            <div style={{ display: "flex" }}>
              <Input>{detail.memberAddress}</Input>
              <Btn
                onClick={() =>
                  openClick("주소 변경", "주소", detail.memberAddress)
                }
              >
                수정
              </Btn>
            </div>
          </InputBox>
          <InputBox>
            전화번호 :
            <div style={{ display: "flex" }}>
              <Input>{detail.memberTel}</Input>
              <Btn
                onClick={() =>
                  openClick("전화번호 변경", "전화번호", detail.memberTel)
                }
              >
                수정
              </Btn>
            </div>
          </InputBox>
          <Btn1>
            <Btn2 onClick={() => openClick1(detail.member)}>비밀번호 변경</Btn2>
            <Btn2>1대1 문의하기</Btn2>
            <Btn2>구매 내역 조회</Btn2>
          </Btn1>
        </BoxContent2>
      </BoxContent>
      <Usermodal
        type={1}
        open={modalOpen}
        close={closeModal}
        header={headerName}
        name={bodyName}
        detail={bodyContent}
      ></Usermodal>
      <Pwdmodal
        type={1}
        open={modalOpen1}
        close={closeModal1}
        detail={password}
      ></Pwdmodal>
      <Imgmodal
        type={1}
        open={modalOpen2}
        close={closeModal2}
        header={headerName}
        name={bodyName}
        image={image}
      ></Imgmodal>
    </div>
  );
};
export default Myprofile;
