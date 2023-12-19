import { useEffect, useState } from "react";
import { SideBar} from "../PublicStyle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RightBox, PaginationContainer, PageButton  } from "./Adminmember";
import AdminAxiosApi from "../../api/AdminAxios";

const QnaBoard = styled.div`
    padding: 10px 20px;
    
    .textbox {
        
        p {
            cursor: pointer;
            margin-bottom: 10px;
            transition: 0.3s;
            
            &:hover {
                color: #9c9c9c;
            }
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



const Adminqna = () =>{
    const navigate = useNavigate();
    
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [qnaAllList, setQnaAllList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);  // 현재 페이지
    const [totalPage, setTotalPage] = useState(0);      // 총 페이지 수

    const selectedData = () => {
        switch(selectedCategory) {
            case 'all':
                return qnaAllList.sort((a, b) => new Date(a.regDate) - new Date(b.regDate));
            case 'recent':
                return qnaAllList.sort((a, b) => new Date(b.regDate) - new Date(a.regDate));
            case 'unanswered':
                return qnaAllList.filter(item => !item.answer);
            case 'answered':
                return qnaAllList.filter(item => item.answer);
            default:
                return qnaAllList;
        }
    };

    const handleQnaDetail = (id) => {
        navigate(`/admin/qna/${id}`);
    };

    // useEffect(() => {
    //     const getQnaAllList = async () => {
    //         try {
    //             const res = await AdminAxiosApi.QnaAllList();
    //             console.log(res);
    //             console.log(res.data);
    //             console.log("boardId : " + res.data[0].boardId);
    //             setQnaAllList(res.data);
    //         } catch(error) {
    //             console.log(error);
    //         }
    //     };
    //     getQnaAllList();
    // }, []);

    
    useEffect(() => {
        const totalPage = async() => {
            try {
                const res = await AdminAxiosApi.QnaPage(0, 10);
                setTotalPage(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        totalPage();
    }, []);

    useEffect(() => {
        const qnaList = async () => {
            try {
                const res = await AdminAxiosApi.QnaPageList(currentPage, 10);
                console.log(res.data);
                setQnaAllList(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        qnaList();
    }, [currentPage]);


    // 페이지네이션 - 페이지 이동 기능
    const handlePageChange = (number) => {
        console.log(number);
        setCurrentPage(number - 1);
    };

    // 페이지네이션 버튼
    const renderPagination = () => {
        return (
            <PaginationContainer>
                {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                    <PageButton key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </PageButton>
                ))}
            </PaginationContainer>
        );
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
                        {selectedData().map((item,index) => (
                            <div key={index} className="flexbox" >
                                <span>{item.boardId}</span>
                                {/* <img src={item.Img} alt="프로필 이미지" /> */}
                                <div className="textbox">
                                    <p onClick={() => handleQnaDetail(item.boardId)}>{item.boardType} <span className="bar"></span>{item.comment}</p>
                                    <div className="bottomTxt">
                                        <span>{item.memberEmail}</span>
                                        <span className="bar"></span>
                                        <span>{item.regDate}</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        ))}
                    </QnaBoard>
                </RightBox>
                {renderPagination()}
            </SideBar>
        </>
    )
}

export default Adminqna;