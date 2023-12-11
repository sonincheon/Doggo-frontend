import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode"; // 따로 라이브러리 설치

// api를 실행할 컴포넌트
// 반환값을 확인하고 싶으면 공식문서 확인
// https://postcode.map.daum.net/guide
const SearchAddr = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address; // 기본 주소
        let extraAddress = ''; // 상세 주소

        // addressType : R, J 검색된 기본 주소타입(R : 도로명, J : 지번)
        // bname : 법정동/법정리 코드
        // buildingName : 건물명
        // zonecode : 새 우편번호
        // ... => enroll_company에 다 담겠다는 의미

        // if문을 사용하지 않고 반환값 중 원하는 값만 사용하면 됨
        // data.address를 사용해도 무방
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data);
        console.log(fullAddress);
        console.log(data.zonecode);

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        <>
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} />
        </>
    );
};

export default SearchAddr;