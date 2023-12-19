import styled from "styled-components";
import { SideBar } from "../PublicStyle";
import { RightBox, PaginationContainer, PageButton  } from "./Adminmember";
import { useEffect, useState } from "react";
import AdminAxiosApi from "../../api/AdminAxios";
import Feedmodal from "../../utill/Feedmodal";

const Adminfeed = () =>{
    // DATA 불러오기, 페이지
    const [feedList,setFeedList]=useState([]);
    const [currentPage, setCurrentPage] = useState(0);  // 현재 페이지
    const [totalPage, setTotalPage] = useState(0);      // 총 페이지 수
    const [isTrue,setIsTrue]=useState(false);
    const [selectedCategory, setSelectedCategory] = useState('CAT');    // 분류
    // 모달관련
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState("");
    const [feedImg, setFeedImg] = useState("");
    const [feedType, setFeedType] = useState("");
    const [feedName, setFeedName] = useState("");
    const [feedPrice, setFeedPrice] = useState("");
    const [feedInfo, setFeedInfo] = useState("");

    const closeModal = () => {
        setModalOpen(false);
    };
    const openClick = (modalInput, id, feedImg, feedType, feedName, feedPrice, feedInfo) => {
        setType(modalInput);      
        setModalOpen(true);  
        setId(id);
        setFeedImg(feedImg);
        setFeedType(feedType);
        setFeedName(feedName);
        setFeedPrice(feedPrice);
        setFeedInfo(feedInfo);
    }
    // 리렌더링 용
    const Click = () => {
        setIsTrue((prev) => !prev);
    };

    const setTrue =(sel)=>{
        setIsTrue(sel);
    }
    const HandleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // 페이지 - DATA불러오기
    useEffect(() => {
        const totalPage = async() => {
            try {
                const res = await AdminAxiosApi.FeedPage(0, 10);
                setTotalPage(res.data);
                console.log(res);
                console.log(res.data);
            } catch(error) {
                console.log(error);
            }
        };
        totalPage();
    }, [modalOpen]);

    useEffect(() => {
        const feedList = async () => {
            try {
                const res = await AdminAxiosApi.FeedPageList(currentPage, 10);
                console.log(res.data);
                setFeedList(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        feedList();
    }, [currentPage,isTrue]);




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


    // 사료삭제
    const HandleDeleteFeed = async(id) => {
        const feedDel = async () => {
            try {
                const rsp = await AdminAxiosApi.FeedDelete(id);
                console.log(id);
                if (rsp.status === 200) {
                    alert("사료 삭제가 완료되었습니다.");
                    Click();
                } 
            } catch (e) {
                console.log("사료 삭제에 실패했습니다.");
            }
        };
        feedDel();
    };

    const selectedData = () => {
        switch(selectedCategory) {
            case 'all':
                return feedList;
            case 'CAT':
                return feedList.filter(item => item.feedType === 'CAT');
            case 'DOG':
                return feedList.filter(item => item.feedType === 'DOG');
            default:
                return feedList;
        }
    };

    return(
        <>
            <SideBar>         
                <RightBox>
                    <h1>사료 관리</h1>
                    <div className="selectBox boxFlex">
                        <div className="labelBox">
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
                                value="CAT"
                                checked={selectedCategory === 'CAT'}
                                onChange={() => HandleCategoryChange('CAT')} 
                                />
                                고양이
                            </label>
                            <label>
                                <input 
                                type="radio"
                                value="DOG"
                                checked={selectedCategory === 'DOG'}
                                onChange={() => HandleCategoryChange('DOG')} 
                                />
                                강아지
                            </label>
                        </div>
                        <div className="btnBox">
                            <button onClick={() => openClick(1)}>추가</button>
                        </div>
                        
                   
                    </div>
                    
                    <div className="scrollBox">
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Img</th>
                                    <th>Type</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Subscribe</th>
                                    <th>Info</th>
                                    <th>Change</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedData().map((feed,index) => (
                                    <tr key={index}>
                                        <td>{feed.feedId}</td>
                                        <td>{feed.feedImg}</td>  
                                        <td>{feed.feedType}</td>
                                        <td>{feed.feedName}</td>    
                                        <td>{feed.feedPrice}</td>
                                        <th>{feed.feedSubscribe}</th>
                                        <td>{feed.feedInfo}</td>
                                        <td>
                                            <button 
                                            onClick={() => openClick(
                                                2,
                                                feed.feedId,
                                                feed.feedImg,
                                                feed.feedType,
                                                feed.feedName,
                                                feed.feedPrice,
                                                feed.feedSubscribe,
                                                feed.feedInfo
                                            )}>수정</button>
                                        </td>
                                        <td>
                                            <button onClick={() => HandleDeleteFeed(feed.feedId)}>삭제</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {renderPagination()}
                    <Feedmodal
                        type={type}
                        open={modalOpen}
                        close={closeModal}
                        id={id}
                        feedImg={feedImg}
                        feedType={feedType}
                        feedName={feedName}
                        feedPrice={feedPrice}
                        feedInfo={feedInfo}
                        setIsTrue={setTrue}
                    ></Feedmodal>
                </RightBox>
            </SideBar>
        </>
    )
}

export default Adminfeed;