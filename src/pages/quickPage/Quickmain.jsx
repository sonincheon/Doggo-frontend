import { useEffect, useState } from "react";
import HouseBtn from "../../components/HouseBtn";
import { Center } from "../../components/PublicStyle";
import QuickMenu from "../../components/quicksell/QuickMenu";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";

const SellBox =styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: start;
    }
    `;
const TitleBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color: #333333;
h1 {
  font-size: calc(2em + 1vw);
  line-height: 1.5;
  font-weight: bold;
}
p {
  font-size:  calc(1em + 1vw);;
  padding: 2%;
}

/* 화면 크기가 작을 때(presumably mobile) 설정 */
@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.3em;
  }
  p {
    font-size: 0.8em; /* 텍스트 크기 조정 */
  }
}
`;

const Quickmain = () =>{
    const [type,setType] =useState("DOG");
    const [feedList,setFeedList] =useState();

    useEffect(() => {
        const FeedsList = async () => {
          try {
            console.log(type);
            const resp = await AxiosApi.FeedList(type); //전체 조회
            if (resp.status === 200){
              setFeedList(resp.data);
              console.log(resp.data);
            }}catch (e) {
            console.log(e);
          }
        };
        FeedsList();
      }, [type]);

      const onselect = (sel) => {
        setType(sel);
      };

    return(
        <div>
        <Center>
        <TitleBox>
          <h1>PETMEMOIR와 함께 하는 귀여운 내 애완동물 관리하기! </h1>
          <h1> 맴버쉽을 통하여 이제 사료, 간식 걱정없이 키우세요! </h1>
          <p>🔻🔻 나만의 구독 서비스를 원한다면 선택해주세요 🔻🔻 </p>
        </TitleBox>
            <SellBox>
                <QuickMenu title={"ONE MONTH FREE"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 최대 1마리"}
                list3={"체험판 간식 무료 배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"첫달 무료 체험"} onSelected={onselect}/>
                <QuickMenu title={"STANDARD"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 최대 3마리"}
                list3={"STANDARD  정기배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"99,000원/월"} onSelected={onselect}/>
                <QuickMenu title={"PREMIUM"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 무제한"}
                list3={"PREMIUM 정기배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"129,000원/월"} onSelected={onselect}/>
            </SellBox>
        </Center>
        </div>
    )
}

export default Quickmain;