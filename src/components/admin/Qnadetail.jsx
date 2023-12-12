import { useParams } from "react-router-dom";
import { SideBar } from "../PublicStyle";
import styled from "styled-components";
import { qnaData } from "./Adminqna";
import { useState } from "react";
import { RightBox } from "./Adminmember";

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
    const selectedQna = qnaData.find((item) => item.Id === parseInt(id));

    const [answer, setAnswer] = useState("");
    const [uploadedAnswer, setUploadedAnswer] = useState(selectedQna.Answer || "");

    const uploadAnswer = () => {
        setUploadedAnswer(answer);
        setAnswer("");  // 업로드시, textarea초기화
        console.log("Answer uploaded : ", answer);
    };

    return (
        <>
        <SideBar>
            <RightBox>
                <h1>1:1 문의</h1>
            <QnaBoard>                    
                <div className="flexbox">
                    <span>{selectedQna.Id}</span>
                    <img src={selectedQna.Img} alt="프로필 이미지" />
                    <div className="textbox">
                        <p>{selectedQna.QuestionTitle}</p>
                        <div className="bottomTxt">
                            <span>{selectedQna.Nick}</span>
                            <span className="bar"></span>
                            <span>{selectedQna.QuestionDate}</span>
                        </div>
                        
                    </div>                
                </div>
                <div className="QuestionDetail">
                    <p>{selectedQna.Question}</p>
                </div>
                <div className="answerBox">
                    <div className="uploadedAnswer">
                        <p>관리자의 답변 : 페이지 나가면 답변 사라짐, back연결하고 DB저장시켜야 할듯?</p>
                        {/* {selectedQna.Answer} */}
                        {uploadedAnswer || <p>{uploadedAnswer}</p>}
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