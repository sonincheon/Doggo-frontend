import { useParams } from "react-router-dom";
import { SideBar } from "../PublicStyle";
import styled from "styled-components";
import { qnaData } from "./Adminqna";
import { useEffect, useState } from "react";
import { RightBox } from "./Adminmember";
import AdminAxiosApi from "../../api/AdminAxios";

const QnaBoard = styled.div`
    border: 1px solid #776B5D;
    border-radius: 10px;
    padding: 0px 20px 20px;
 
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
    .QuestionDetail {
        padding: 20px 10px;
        border-bottom: 1px solid #cdc5b8;
    }
    .answerBox {
        position: relative;
        padding-bottom: 40px;

        .uploadedAnswer {
            white-space: normal;
            padding: 20px 10px;
            p:nth-child(1) {
                margin-bottom: 10px;
            }
        }
        textarea {
            width: 100%;
            padding: 10px 10px;
            margin-bottom: 10px;
            border: none;
            outline: none;
            resize: none;
            border: 1px solid #cdc5b8;
            border-radius: 5px;
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

            position: absolute;
            bottom: 0px;
            right: 0px;
        }
    }
`;

const Qnadetail = () => {
    // id로 해당 문의의 상세정보를 가져옴
    const { id } = useParams();

    const [detailQna, setDetailQna] = useState([]);
    const [answer, setAnswer] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    const [uploadedAnswer, setUploadedAnswer] = useState(answer);
    
    const Click = () => { 
        setIsTrue((prev) => !prev);
    }

    // QnaDetail data가져오기
    useEffect(() => {
        const getDetailQna = async () => {
            try {
                const res = await AdminAxiosApi.QnaDetail(id);
                console.log (res);
                console.log (res.data);
                setDetailQna(res.data);
                Click();
            } catch (error) {
                console.log(error);
            }
        };
        getDetailQna();
    }, [id, isTrue]);
    
    // 답변 업로드
    const uploadAnswer = async() => {
        try {
            console.log("답변 : " + answer, "아이디 : " + id);
            const res = await AdminAxiosApi.AnswerChange(id, answer);
            
            if (res.data === true) {
            const res = await AdminAxiosApi.QnaDetail(id);
            console.log(res);
            console.log(res.data);
            
            // setDetailQna("");
            setAnswer("");  // 업로드시, textarea초기화
            }
        } catch (e) {
            console.error(e);
            alert("에러 발생");
        }
    };

   

    return (
        <>
        <SideBar>
            <RightBox>
                <h1>1:1 문의</h1>
            <QnaBoard>                    
                <div className="flexbox">
                    <span>{detailQna.boardId}</span>
                    {/* <img src={selectedQna.Img} alt="프로필 이미지" /> */}
                    <div className="textbox">
                        <p>{detailQna.boardType}  <span className="bar"></span>  {detailQna.comment}</p>
                        <div className="bottomTxt">
                            <span>{detailQna.memberEmail}</span>
                            <span className="bar"></span>
                            <span>{detailQna.regDate}</span>
                        </div>
                        
                    </div>                
                </div>
                <div className="QuestionDetail">
                    <p>{detailQna.comment}</p>
                </div>
                <div className="answerBox">
                    <div className="uploadedAnswer">
                        <p>관리자의 답변 : </p>
                        <p>{detailQna.answer}</p>
                        
                   
                    </div>
                    <textarea 
                    placeholder="답변을 입력하세요."
                    value={answer}
                    cols="100" rows="5"
                    onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <button onClick={uploadAnswer}>답변 작성</button>
                </div>
                    

            </QnaBoard>

            </RightBox>
            
        </SideBar>
             
        </>
    )
}


export default Qnadetail;