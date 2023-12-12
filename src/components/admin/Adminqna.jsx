import { useState } from "react";
import { SideBar } from "../PublicStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RightBox } from "./Adminmember";

const QnaBoard = styled.div`
    padding: 10px 20px;
    
    .textbox {
        p {
            margin-bottom: 10px;
        }
        .bottomTxt {
            color: #776B5D;
            
            .bar {
                display: inline-block;
                width: 1px;
                height: 14px;
                background-color: #776B5D;
                border: 1px solid #776B5D;
                margin: 0 10px;
            }
        }
    }
`;

export const qnaData = [
    {Id:1,
    Img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
    QuestionTitle: "Q [로그인/정보] 다른 방법으로 아이디와 비밀번호를 찾을 수 있는 방법이 있나요?",
    Nick: "신대방 송강",
    QuestionDate: "2023-05-01",
    Question: "제곧내 ㅠㅠ ",
    Answer: "aaaaaaaaaaa",
},
    {Id:2,
    Img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
    QuestionTitle: "Q [사료문의] 어떤 사료를 주어야 할지 모르겠어요.",
    Nick: "나비",
    QuestionDate: "2023-06-25",
    Question: "제곧내 ㅠㅠ ",
    Answer: "bbbbbbbbbbbbbb",
},
    {Id:3,
    Img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
    QuestionTitle: "Q [사료문의] 사료 구매 시 배송일은 어떻게 되나요?",
    Nick: "춘배",
    QuestionDate: "2023-07-30",
    Question: "제곧내 ㅠㅠ ",
    Answer: "",
},
    {Id:4,
    Img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
    QuestionTitle: "Q [이용문의] 회원 등급별 혜택은 어떻게 되나요?",
    Nick: "민수",
    QuestionDate: "2023-11-18",
    Question: "제곧내 ㅠㅠ ",
    Answer: "",
},
    {Id:5,
    Img: "https://firebasestorage.googleapis.com/v0/b/dogcat-42fca.appspot.com/o/KDcViVN5lc9nXMk9kayDMM1E4MLfKV2ouBZdod6Drpsz8X6V71hi0io22P5eH8G_SoIbmtVgh_5pl3x2xzDaXQq_cCG0bNovXTCRUs9Hxico_Tx7chlHEVhTc0_GWP8hK-7-dQjGJJLX4qdjzLVxZw.jpg?alt=media&token=5ac08f40-1599-4a19-b65e-bd5e57b24cb2",
    QuestionTitle: "Q [이용문의] 자주 묻는 질문이 있나요?",
    Nick: "영철",
    QuestionDate: "2023-12-26",
    Question: "제곧내 ㅠㅠ ",
    Answer: "",
},
]

const Adminqna = () =>{
    const navigate = useNavigate();
    
    const [selectedCategory, setSelectedCategory] = useState('all');

    const selectedData = () => {
        switch(selectedCategory) {
            case 'all':
                return qnaData.sort((a, b) => new Date(a.QuestionDate) - new Date(b.QuestionDate));
            case 'recent':
                return qnaData.sort((a, b) => new Date(b.QuestionDate) - new Date(a.QuestionDate));
            case 'unanswered':
                return qnaData.filter(item => !item.Answer);
            case 'answered':
                return qnaData.filter(item => item.Answer);
            default:
                return qnaData;
        }
    };

    const handleQnaDetail = (id) => {
        navigate(`/admin/qna/${id}`);
    };

    return(
        <>
            <SideBar>
                <RightBox>
                    <h1> 1:1 문의 관리</h1>
                    <div className="selectBox">
                        <label>
                            <input 
                            type="radio"
                            value="all"
                            checked={selectedCategory === 'all'}
                            onChange={() => setSelectedCategory('all')}
                            />
                            전체문의
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="recent"
                            checked={selectedCategory === 'recent'}
                            onChange={() => setSelectedCategory('recent')}
                            />
                            최근순
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="unanswered"
                            checked={selectedCategory === 'unanswered'}
                            onChange={() => setSelectedCategory('unanswered')}
                            />
                            답변 대기
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="answered"
                            checked={selectedCategory === 'answered'}
                            onChange={() => setSelectedCategory('answered')}
                            />
                            답변 완료
                        </label>
                    </div>
                   
                    <QnaBoard>
                        {selectedData().map(item => (
                            <div key={item.Id} className="flexbox" >
                                <span>{item.Id}</span>
                                <img src={item.Img} alt="프로필 이미지" />
                                <div className="textbox">
                                    <p onClick={() => handleQnaDetail(item.Id)}>{item.QuestionTitle}</p>
                                    <div className="bottomTxt">
                                        <span>{item.Nick}</span>
                                        <span className="bar"></span>
                                        <span>{item.QuestionDate}</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        ))}
                    </QnaBoard>

                </RightBox>
                
            </SideBar>
        </>
    )
}

export default Adminqna;