import styled from "styled-components";
import { useEffect, useState } from "react";
import { storage } from "./FireBase";
import { useNavigate } from "react-router-dom";
import AdminAxiosApi from "../api/AdminAxios";
import AxiosApi from "../api/Axios";

const ModalStyle = styled.div`
  /* 모달 기본 스타일 */
  .modal {
    display: none; // 초기에는 숨김
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
    display: block; // 모달이 보이도록 함
    align-items: center;
    animation: modal-show 0.8s; // 배경이 스르륵 열리는 효과
    overflow-Y: scroll;
 
    // 테두리 추가
  }
  .container {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 50px;

    width: 90%;
    max-width: 1000px;
    margin: 100px auto;
    animation: modal-show 0.1s; // 모달이 스르륵 열리는 효과
  }

  /* 모달 헤더 스타일 */
  header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #fff;
    color: #776b5d;
    font-weight: 900;
    font-size: 20px;

    display: flex;
    // 테두리 추가
  }
  .closeBtn {
    width: 30px;
    height: 30px;
    
    position: absolute;
    top: 0;
    right: 0;

    /* background-color: pink; */
    cursor: pointer;
        & > div {
            width: 100%;
            height: 2px;
            background-color: #776b5d;
            position: absolute;
            top: 50%;
            left: 0;
        }
    .bar1 {
    transform: rotate(315deg);
    }
    .bar2 {
    transform: rotate(45deg);
    }
  }

    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
        // 테두리 추가
    }


  /* 모달 내용 스타일 */
    main {
        padding: 20px;

        .imgBox {
            width: 70%;
            min-width: 250px;
            margin: 0 auto;
            padding: 20px;

            & > img {
                display: block;
                width: 100%;
                margin-bottom: 10px;
            }

            .fileLebel {
                display: block;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 23px;
                margin-bottom: 10px;
                cursor: pointer;
                font-size: 30px;
                font-weight: 200;
                color: #fff;
                background-color: #aea191;
                margin: 30px auto;

                & > input {
                    display: none;
                }
            }
            .uploadBtn {
                text-align: right;
            }
        }
        .infoBox {
            width: 70%;
            min-width: 300px;
            margin: 0 auto;
            padding: 40px 20px 20px;

            .feedType {
                margin-bottom: 20px;

                & > label {
                    margin-right: 10px;
                }
            }

            & > input {
                display: block;
                width: 100%;
                height: 30px;
                padding: 10px;
                margin-bottom: 20px;
                /* border-radius: 5px; */
                border-style: none;
                border-bottom: solid 1px #776b5d;
            }
        }
    }

  /* 모달 푸터 스타일 */
    footer {
        text-align: center;
        margin: 20px;
    }

  /* 모달 버튼 스타일 */
  footer > button {
    padding: 6px 12px;
    color: #fff;
    background-color: #45474b;
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

const Feedmodal = (props) => {
    const { type, open, close, id, feedImg, feedType, feedName, feedPrice, feedInfo ,setIsTrue} = props;
    const [url, setUrl] = useState("");
    const [file, setFile] = useState(null);
    const [inputFeedType, setInputFeedType] = useState("");
    const [inputFeedName, setInputFeedName] = useState("");
    const [inputFeedPrice, setInputFeedPrice] = useState("");
    const [inputFeedInfo, setInputFeedInfo] = useState("");

    const onChangeFeedType = (value) => {
        setInputFeedType(value);
    };
    const onChangeFeedName = (e) => {
        setInputFeedName(e.target.value);
    };
    const onChangeFeedPrice = (e) => {
        setInputFeedPrice(e.target.value);
    }
    const onChangeFeedInfo = (e) => {
        setInputFeedInfo(e.target.value);
    };

    const handleFileInputChange = (e) => {
        setFile(e.target.files[0]);
    };
    
    const handleUploadClick = async () => {
        try {
          const storageRef = storage.ref();
          const fileRef = storageRef.child(file.name);
    
          // 파일을 업로드하고 기다립니다.
          await fileRef.put(file);
          console.log("File uploaded successfully!");
    
          // 다운로드 URL을 가져오고 기다립니다.
          const url = await fileRef.getDownloadURL();
          console.log("저장경로 확인 : " + url);
    
          // 상태를 업데이트합니다.
          setUrl(url);
        } catch (error) {
          // 에러를 처리합니다.
          console.error("Upload failed", error);
        }
    };

    const Close = () => {
    setFile("");
    setUrl("");
    setInputFeedType("");
    setInputFeedName("");
    setInputFeedPrice("");
    setInputFeedInfo("");
    close();
    };

    const navigate = useNavigate();

    const feedUpload = async () => {
        console.log("feedUpload : ",                 url,
        inputFeedType,
        inputFeedName,
        inputFeedPrice,
        inputFeedInfo)
        try {
            const res = await AxiosApi.FeedReg(
                url,
                inputFeedInfo,
                inputFeedName,
                inputFeedPrice,
                inputFeedType,
            );
            if (res.data === true) {
                alert("등록 성공");
                navigate("/admin/feed");
                setUrl("");
                setIsTrue((prev)=>!prev);
                close();
            } else {
                alert("등록에 실패했습니다.");
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // 수정
    const feedUpdate = async () => {
        console.log(url, inputFeedType, inputFeedName, inputFeedPrice, inputFeedInfo);
        try {
            const res = await AdminAxiosApi.FeedModify(
                id,
                url,
                inputFeedType,
                inputFeedName,
                inputFeedPrice,
                inputFeedInfo
            );
            if (res.data === true) {
                alert("등록 성공");
                navigate("/admin/feed");
                setUrl("");
                close();
            } else {
                alert("등록에 실패했습니다.");
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }  
    };

    useEffect(() => {
        console.log(feedType);
        if (open) {
          setInputFeedType(feedType || "");
          setInputFeedName(feedName || "");
          setInputFeedPrice(feedPrice || "");
          setInputFeedInfo(feedInfo || "");
        }
      }, [open, feedImg, feedType, feedName, feedPrice, feedInfo]);

    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
                {open && (
                    <div className="container">
                        <header>
                            <div className="txtBox">
                                <span>사료</span>
                                {type && type === 1 ? <span> 추가</span> : <span> 수정</span>}
                            </div>
                            
                            <div className="closeBtn" onClick={Close}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                            </div>
                            
                        </header>
                        <main>
                            <div className="imgBox">
                                <img src={url} alt="사료 이미지를 추가해주세요" /> 
                               
                                <label for="file" className="fileLebel">
                                    <span>+</span>
                                    <input type="file" id="file" multiple onChange={handleFileInputChange} />
                                </label>
                                <div className="uploadBtn">
                                    <button onClick={handleUploadClick}>사진 업로드</button>
                                </div>
                                
                            </div>
                            <div className="infoBox">
                                <div className="feedType">
                                    <label>
                                        <input 
                                        type="radio"
                                        value="CAT"
                                        checked={inputFeedType === 'CAT'}
                                        onChange={() => onChangeFeedType('CAT')} 
                                        />
                                        고양이
                                    </label>
                                    <label>
                                        <input 
                                        type="radio"
                                        value="DOG"
                                        checked={inputFeedType === 'DOG'}
                                        onChange={() => onChangeFeedType('DOG')} 
                                        />
                                        강아지
                                    </label>
                                </div>
                    
                                <input type="text" placeholder="사료 명" value={inputFeedName} onChange={onChangeFeedName} />
                                <input type="text" placeholder="가격" value={inputFeedPrice} onChange={onChangeFeedPrice} />
                                <input type="text" placeholder="사료 설명" value={inputFeedInfo} onChange={onChangeFeedInfo} />
                            </div>

                        </main>
                        <footer>
                            {type && type === 1 ? (
                                <button onClick={feedUpload}>추가</button>
                            ) : (
                                <button onClick={feedUpdate}>수정</button>
                            )}
                            {/* <button onClick={Close}>취소</button> */}
                        </footer>
                    </div>
                )}
            </div>
        </ModalStyle>
    );

};

export default Feedmodal;