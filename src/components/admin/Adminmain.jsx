import styled from "styled-components";
import { SideBar } from "../PublicStyle";
import { RightBox } from "./Adminmember";
import { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AdminAxiosApi from "../../api/AdminAxios";


const data = [
    {
        name: 'Page A',
        uv: 4000,
      },
      {
        name: 'Page B',
        uv: 3000,
      },
      {
        name: 'Page C',
        uv: 2000,
      },
      {
        name: 'Page D',
        uv: 2780,
      },
      {
        name: 'Page E',
        uv: 1890,
      },
      {
        name: 'Page F',
        uv: 2390,
      },
];
// 차트를 담고있는 컴포넌트, 여기서 크기지정 안하면 차트가 안뜸
export const ChartSize = styled.div`
    width: 100%;
    height: 400px;
`;

// 사료별 누적 판매수익? -> sale조회에서 feed까지 가져오기? -> 
// feed - feedType, feedName, feedPrice, feedSubscribe(판매수)
// sale - salesRegDate, feedName, feedDto

const Adminmain = () => {
    // axios로 사료 이름, type, 판매수 가져오기
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
        const getFeedSaleChart = async () => {
            try {
                const res = await AdminAxiosApi.SaleAllList();
                const data = res.data;
                console.log(data);
    
                // 필요한 데이터 가져와서 요리조리.. 

                // 차트에 표시할 형식으로 변환

    
                // 변환된 데이터를 state에 설정하여 차트를 다시 렌더링
                setChartData(chartData);
            } catch (error) {
                console.log(error);
            }
        };
        getFeedSaleChart();
    }, []);
    




    return(
        <>
            <SideBar>
                <RightBox>
       
                    <ChartSize>
                        <h1>사료별 판매 현황</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <Bar dataKey="uv" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartSize>

                </RightBox>       
            </SideBar>
        </>
    )
    
}

export default Adminmain;