import React from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';


const Post = styled.div`
    display: block;
    position: fixed;
    left: 35vw;
    top: 20vh;
    width: 30%;
    border: 3px solid black;
    border-radius: 0 0 15px 15px;
    background-color: white;
`;

const Button1 = styled.button`
    width: 100%;
    border-radius: 0px 0px 10px 10px;
    background-color: #776B5D;
    border: none;
    color: white;
    font-weight: bold;
    border: 2px solid black;

`;

const PopupPostCode = (props) => {

	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        props.onPostNum(data.zonecode)
        props.onPost(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }

 
    return(
        <Post>
            <DaumPostcode onComplete={handlePostCode} />
            <Button1 onClick={() => {props.onClose()}} className='postCode_btn'>닫기</Button1>
        </Post>
    )
}
 
export default PopupPostCode;