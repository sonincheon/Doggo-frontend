import styled from "styled-components";
import { SideBar } from "../PublicStyle";
import { RightBox, PaginationContainer, PageButton  } from "./Adminmember";
import { useEffect, useState } from "react";
import AdminAxiosApi from "../../api/AdminAxios";



const Adminfeed = () =>{

    const [feedList,setFeedList]=useState([]);
    const [currentPage, setCurrentPage] = useState(0);  // 현재 페이지
    const [totalPage, setTotalPage] = useState(0);      // 총 페이지 수
    const [isTrue,setIsTrue]=useState(false);

    const [selectedCategory, setSelectedCategory] = useState('CAT');
  
    const Click = () => {
        setIsTrue((prev) => !prev);
    };

    const HandleCategoryChange = (category) => {
        setSelectedCategory(category);
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
                console.log("에러");
            }
        };
        feedDel();
    };



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
    }, [isTrue]);

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
                    
                    <div className="scrollBox">
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Img</th>
                                    <th>Price</th>
                                    <th>Info</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedData().map((feed,index) => (
                                    <tr key={index}>
                                        <td>{feed.feedId}</td>
                                        <td>{feed.feedName}</td>
                                        <td>{feed.feedImg}</td>              
                                        <td>{feed.feedPrice}</td>
                                        <td>{feed.feedInfo}</td>
                                        <td>
                                            <button onClick={() => HandleDeleteFeed(feed.feedId)}>삭제</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {renderPagination()}

                </RightBox>
            </SideBar>
        </>
    )
}

export default Adminfeed;