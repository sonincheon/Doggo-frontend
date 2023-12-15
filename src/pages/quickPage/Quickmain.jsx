import { useEffect, useState } from "react";
import HouseBtn from "../../components/HouseBtn";
import { Center } from "../../components/PublicStyle";
import QuickMenu from "../../components/quicksell/QuickMenu";
import styled from "styled-components";
import AxiosApi from "../../api/Axios";

const SellBox =styled.div`
    width: 100%;
    height: 500px;
    background-color: #EBE3D5 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3em;
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
        <>
        <HouseBtn/>
        <Center>
            <SellBox>
                <QuickMenu title={"ONE MONTH FREE"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 최대 1마리"}
                list3={"체험판 간식 무료 배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"첫달 무료 체험"} onSelected={onselect}/>
                <QuickMenu title={"STANDARD"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 최대 3마리"}
                list3={"STANDARD  정기배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"99,000원/월"} onSelected={onselect}/>
                <QuickMenu title={"PREMIUM"} list1={"멍냥 일기 작성 무제한"} list2={"반려동물 등록 무제한"}
                list3={"PREMIUM 정기배송"}list4={"그밖의 다양한 기능"} dataList={feedList} title2={"129,000원/월"} onSelected={onselect}/>
            </SellBox>
        </Center>
        </>
    )
}

export default Quickmain;