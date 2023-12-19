import styled, { css, keyframes } from "styled-components";
import frame from "../../icon/Frame.svg";

export const MapStyles = styled.div`
  width: 100%;
  height: 100%;
`;

export const MapContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
`;
export const Overlay = styled.div`
  border: 1px solid #b0a695;
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f3eeea;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: #776b5d;
`;

export const PlaceName = styled.p`
  font-size: 16px;
  padding: 10px 5px 10px 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const DetailLink = styled.a`
  text-align: center;
  padding: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  img {
    width: 20px;
    height: 20px;
  }
`;
export const SearchBtns = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const KeywordBtn = styled.button`
  color: #f3eeea;
  background-color: #b0a695;
  width: 140px;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2rem;
  border: none;
  box-shadow: 2px 2px 2px #b0a695;

  @media (max-width: 768px) {
    width: 100px;
    font-size: 0.8rem;
    padding: 8px;
  }
`;

export const ListContainer = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
  z-index: 10;
  width: 400px;
  bottom: 90px;
  overflow-y: auto;
  transition: 0.3s;
  background-color: #f3eeea;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  ${({ isClosed }) =>
    isClosed &&
    css`
      left: -400px;
    `};
`;

export const SideBarOpenBtn = styled.button`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 400px;
  transform: translateY(-50%);
  width: 40px;
  height: 100px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  background-color: #f3eeea;

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: 0px;
    `}
`;

export const ModalContainer = styled.div`
  background-color: #f3eeea;

  @media (max-width: 768px) {
    height: ${({ isClosed }) => (isClosed ? "0px" : "300px")};
    overflow-y: auto;
    transition: 0.3s;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #776b5d;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  max-width: 310px;
  color: #776b5d;

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

export const Category = styled.p`
  color: #776b5d;
`;

export const Address = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #776b5d;
`;

export const Distance = styled.p`
  margin-right: 10px;
  color: #776b5d;
`;

export const RoadAddress = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #776b5d;

  img {
    width: 35px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Division = styled.p`
  margin-right: 10px;
`;

export const PhoneNumber = styled.p`
  color: #776b5d;
`;

export const NoList = styled.p`
  font-size: 18px;
  padding: 20px;
`;

export const Pages = styled.div`
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
`;

export const PageBtn = styled.button`
  margin: 0 10px;
  background-color: #f3eeea;
  border: none;
`;

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MapModal = styled.div`
  position: absolute;
  background: #776b5d;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px 15px 0 0;
  animation: ${slide} 0.3s ease-in-out;
`;

export const ModalBtn = styled.button`
  display: block;
  margin: 15px auto 10px;
  width: 50px;
  height: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f3eeea;

  ${({ isClosed }) =>
    isClosed &&
    css`
      left: 0px;
    `}
`;

// 현재 내 위치로 돌아가는 버튼
export const GoBackButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 70px;
  height: 70px;
  background: no-repeat #bda695 url(${frame}) center/contain;
  background-size: 70%;
  border-radius: 10px;
  border: none;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    right: 20px;
    bottom: 50px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 340px;
        transition: 0.3s;
      }
    `}
`;
// 접속위치 텍스트
export const GoBackTxt = styled.span`
  position: absolute;
  bottom: 30px;
  right: 80px;
  z-index: 10;
  width: 90px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  color: white;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    right: 60px;
    bottom: 50px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 350px;
        transition: 0.3s;
      }
    `}
`;
// 현 지도에서 검색 버튼
export const ReSearch = styled.button`
  position: fixed;
  background-color: #ebe3d5;
  color: #776b5d;
  font-size: 14px;
  top: 150px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
  width: 160px;
  height: 40px;
  line-height: 40px;
  border-radius: 30px;
  border: none;
  box-shadow: 2px 2px 2px #b0a695;
  &:active {
    color: #b0a695;
    background-color: #f3eeea;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    bottom: 105px;
    width: 130px;
    height: 30px;
    line-height: 30px;
  }

  // Modal이 열릴 때만 아래 추가 스타일을 적용
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      @media (max-width: 768px) {
        bottom: 405px;
        transition: 0.3s;
      }
    `}
`;
