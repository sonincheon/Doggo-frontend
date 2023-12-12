import styled from "styled-components";
import { SideBar } from "../PublicStyle";
import { useState } from "react";


export const RightBox = styled.div`
    padding  : 5vw;

    h1 {
        font-size: 30px;
        font-weight: 900;
        color: #776B5D;
        margin-bottom: 16px;
    }
    .selectBox {
        width: 100%;
        padding: 2% 1%;
        margin-bottom: 2%;
        border: 1px solid #776B5D;
        border-radius: 10px;

        label {
            cursor: pointer;
            margin-right: 3%;
        }

        // 라디오 버튼 css
        input[type='radio'] {
        -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
        -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거 
        appearance: none; // 기본 브라우저에서 기본 스타일 제거
        width: 16px;
        height: 16px;
        border: 2px solid #ccc; // 체크되지 않았을 때의 테두리 색상
        border-radius: 50%;
        outline: none; // focus 시에 나타나는 기본 스타일 제거
        cursor: pointer;
        }

        // 체크될 시에, 변화되는 스타일 설정
        input[type='radio']:checked {
        background-color: #776B5D; // 체크 시 내부 원으로 표시될 색상
        border: 3px solid #776B5D; // 테두리와 원 사이의 색상
        //* box-shadow: 0 0 0 1.6px #fff; // 테두리 - 그림자로 테두리를 직접 만들어야 함 (퍼지는 정도를 0으로 주면 테두리처럼 보임)
        }
    }
    // QnA에서 사용
    .flexbox {
        display: flex;
        align-items: center;
        gap: 3%;
        border-bottom: 1px solid #776B5D;
        padding: 20px 10px;

        img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }  
    }
    
    .scrollBox {
        width: 100%;
        overflow-x: scroll;

        &::-webkit-scrollbar {
            height: 8px;  /* 스크롤바의 너비 */
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            height: 8px;
            background: #776B5D; /* 스크롤바의 색상 */
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #fff;  /*스크롤바 뒷 배경 색상*/
        }


        table {
            width: 100%;
            white-space: nowrap;

            thead tr {
                color: #fff;
                background-color: #776B5D;
                font-size: 18px;
                font-weight: 900;
                text-align: center;
            }
            // 테이블 헤드 부분 둥글게 처리하기
            th:first-child {
                border-top-left-radius: 10px;
    
            }
            // 테이블 헤드 2번째 ~ 8번째 까지 border-top 부여
            th:nth-child(n+2):nth-child(-n+7) {
                border-bottom: 1px solid #776B5D;
            }
            th:last-child {
                border-top-right-radius: 10px;
            }
            th {
                padding: 10px 20px;
                box-sizing: border-box;
            }
            tbody {
                text-align: center;
                border-radius: 10px;
            }
            tbody tr {
                border: 1px solid #776B5D;
            }
            td {
                width: 100%;
                padding: 10px 20px;
            }              
            input {
            display: inline-block;
            width: 100px;
            padding: 10px 15px;
            margin-right: 10px;
            border: 1px solid #776B5D;
            border-radius: 6px;
            }
            button {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            background-color: #776B5D;
            color: #fff;
            padding: 8px 12px;
            border-radius: 5px;
            border-style: none;
            box-shadow: 3px 2px 4px 1px #d9d9d9;
            cursor: pointer;
            }  
        }
    }
    @media only screen and (max-width: 767px) {
        /* padding: 10px; */
    }
    
`;

const membersData = [
    { Id: 1, Name: "인천", Nick: "신대방 송강", Email: "in1000s@naver.com", Address: "서울특별시 신림동 신사로 12길 32", Tel: "010-9118-4893", joinedDate: "2023-02-01", isPaid: true },
    { Id: 2, Name: "벼리", Nick: "나비", Email: "nabi@naver.com", Address: "서울특별시 신림동 신사로 12길 33", Tel: "010-1234-4893", joinedDate: "2023-03-20", isPaid: false },
    { Id: 3, Name: "현빈", Nick: "춘배", Email: "chunbae@naver.com", Address: "서울특별시 신림동 신사로 12길 34", Tel: "010-9123-4233", joinedDate: "2023-06-07", isPaid: true },
    { Id: 4, Name: "하늘", Nick: "민수", Email: "minsu@naver.com", Address: "서울특별시 신림동 신사로 12길 35", Tel: "010-9117-4855", joinedDate: "2023-11-15", isPaid: false },
    { Id: 5, Name: "지은", Nick: "영철", Email: "youngchul@naver.com", Address: "서울특별시 신림동 신사로 12길 36", Tel: "010-7118-2343", joinedDate: "2023-12-26", isPaid: true },
];

const Adminmember = () =>{
    const [members, setMembers] = useState(membersData);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const HandleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    // 회원삭제
    const HandleDeleteMember = (id) => {
        const updatedMembers = members.filter((member) => member.Id !== id);
        setMembers(updatedMembers);
    };
    // 전체, 유료, 무료회원 별로 조회
    const filteredMembers = 
        selectedCategory === 'all'
        ? members
        : members.filter((member) => (selectedCategory === 'paid' ? member.isPaid : !member.isPaid));

    return(
        <>
            <SideBar>         
                <RightBox>
                    <h1>회원 관리</h1>
                    <div className="selectBox">
                        <label>
                            <input 
                            type="radio"
                            value="all"
                            checked={selectedCategory === 'all'}
                            onChange={() => HandleCategoryChange('all')} 
                            />
                            전체
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="paid"
                            checked={selectedCategory === 'paid'}
                            onChange={() => HandleCategoryChange('paid')} 
                            />
                            구독중
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="free"
                            checked={selectedCategory === 'free'}
                            onChange={() => HandleCategoryChange('free')} 
                            />
                            미구독
                        </label>
                    </div>
                    
                    <div className="scrollBox">
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Nick</th>
                                    <th>Email</th>
                                    <th>Addr</th>
                                    <th>Tel</th>
                                    <th>JoinDate</th>
                                    <th>Type</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMembers.map((member) => (
                                    <tr key={member.Id}>
                                        <td>{member.Id}</td>
                                        <td>{member.Name}</td>
                                        <td>{member.Nick}</td>
                                        <td>{member.Email}</td>
                                        <td>{member.Address}</td>
                                        <td>{member.Tel}</td>
                                        <td>{member.joinedDate}</td>
                                        <td>{member.isPaid? '구독중' : '미구독'}</td>
                                        <td>
                                            <button onClick={() => HandleDeleteMember(member.Id)}>삭제</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    

                </RightBox>
            </SideBar>
        </>
    )
}

export default Adminmember;