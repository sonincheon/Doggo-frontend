import styled from "styled-components";
import { SideBar } from "../../components/PublicStyle";


export const Container = styled.div `
width  : 100%;
padding: 10px;
border: 1px solid #776B5D;
border-radius: 10px;

display: flex;
justify-content: space-between;
align-items: center;

label {
 
}
.search_input {
  width: 15vw;
  height: 34px;
  border-radius: 6px;
  border: 1px solid #776B5D;
}
button {
  width: 4vw;
  height: 34px;
  line-height: 34px;
  margin-left: 10px;
  color: white;
  background-color: #776B5D;
  border-radius: 6px;
  border-style: none;
}
`;
export const CheckBox = styled.div`

`;
const Topbox = () =>{


    return(
        <>
            <Container>
                <CheckBox>
                    
                </CheckBox>
                <label htmlFor="" id="search">
                    <input type="text" id="search" placeholder="검색어를 입력해주세요"  className="search_input" />
                    <button>삭제</button>
                </label>
                
            </Container>
        </>
    )
}

export default Topbox;