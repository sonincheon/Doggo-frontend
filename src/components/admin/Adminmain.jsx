import styled from "styled-components";
import { SideBar } from "../PublicStyle";
import { RightBox } from "./Adminmember";
import React, { PureComponent} from 'react';
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import AdminAxiosApi from "../../api/AdminAxios";


const data = [
    {
      name: 'Page A',
      CAT: 4000,
      DOG: 2400,
      amt: 2400,    // 라인그래프일 경우의 라인 수치인듯
    },
    {
      name: 'Page B',
      CAT: 3000,
      DOG: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      CAT: 2000,
      DOG: 9800,
      amt: 2290,
    },
];
// 차트를 담고있는 컴포넌트, 여기서 크기지정 안하면 차트가 안뜸
export const ChartSize = styled.div`
    width: 100%;
    height: 400px;
`;



const Adminmain = () => {


    // axios로 사료 이름, type, 판매수 가져오기
    const [chartData, setChartData] = useState([]);
    
   
    useEffect(() => {
        const getFeedChart = async() => {
            try {
                const res = await AdminAxiosApi.FeedAllList();
                console.log(res.data);
                 // 필요한 속성만 추출하여 setData로 설정
                const ChartData = res.data.map(({ feedType, feedName,  }) => ({ feedType, feedName, }));
                setChartData(ChartData);
            } catch(error) {
                console.log(error);
            }
        }
        getFeedChart();
    }, []);




    return(
        <>
            <SideBar>
                <RightBox>
       
                    <ChartSize>
                        <h1>사료별 판매 현황</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="DOG" fill="pink" activeBar={<Rectangle fill="#db3273" stroke="gray" />} />
                                <Bar dataKey="CAT" fill="gold" activeBar={<Rectangle fill="#f19a18" stroke="gray" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartSize>

                </RightBox>       
            </SideBar>
        </>
    )
    
}

export default Adminmain;