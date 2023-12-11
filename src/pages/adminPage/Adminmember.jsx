import styled from "styled-components";
import { SideBar } from "../../components/PublicStyle";
import { Container, CheckBox } from "../../components/admin/Topbox";
import Topbox from "../../components/admin/Topbox";


const Adminmember = () =>{
    const RightBox = styled.div`
      padding  : 5vw;
    `;
    

    return(
        <>
            <SideBar>
                <RightBox>
                    <h1>회원관리</h1>
                    <Container>
                        <CheckBox>
                            <label htmlFor="" id="all">
                                <input type="checkbox" name="filter" id="all" value="전체"/>
                                <span id="all">전체</span>
                            </label>
                        </CheckBox>
                        <label htmlFor="" id="search">
                            <input type="text" id="search" placeholder="검색어를 입력해주세요"  className="search_input"/>
                            <button>삭제</button>
                        </label>
                        
                    </Container>
                </RightBox>
                
            </SideBar>
        </>
    )
}

export default Adminmember;