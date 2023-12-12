import { useState } from "react";
import { SideBar } from "../PublicStyle";
import { RightBox } from "../admin/Adminmember"

const ordersData = [
    { Id: 1, OrderDate: "2023-02-05", Email: "in1000s@naver.com", Address: "서울특별시 신림동 신사로 12길 32", Tel: "010-9118-4893", OrderProduct: "로얄캐닌 미니 어덜트 15kg", ProStatus: "출고완료", InvoiceNum: "28389283" },
    { Id: 2, OrderDate: "2023-03-25", Email: "nabi@naver.com", Address: "서울특별시 신림동 신사로 12길 33", Tel: "010-9118-4893", OrderProduct: "로얄캐닌 미니 어덜트 15kg", ProStatus: "출고완료", InvoiceNum: "38350939" },
    { Id: 3, OrderDate: "2023-06-10", Email: "chunbae@naver.com", Address: "서울특별시 신림동 신사로 12길 34", Tel: "010-9118-4893", OrderProduct: "로얄캐닌 미니 어덜트 15kg", ProStatus: "준비중", InvoiceNum: "" },
    { Id: 4, OrderDate: "2023-11-25", Email: "minsu@naver.com", Address: "서울특별시 신림동 신사로 12길 35", Tel: "010-9118-4893", OrderProduct: "로얄캐닌 미니 어덜트 15kg", ProStatus: "준비중", InvoiceNum: "" },
    { Id: 5, OrderDate: "2023-12-26", Email: "youngchul@naver.com", Address: "서울특별시 신림동 신사로 12길 36", Tel: "010-9118-4893", OrderProduct: "로얄캐닌 미니 어덜트 15kg", ProStatus: "준비중", InvoiceNum: "" },
]

const Adminsales = () =>{
    const [orders, setOrders] = useState(ordersData);
    const [selectedCategory, setSelectedCategory] = useState('all');

 
    const [invoiceInput, setInvoiceInput] = useState('');

    const HandleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    // 송장번호 입력
    const HandleInvoiceUpload = (orderId) => {
        const updatedOrders = orders.map((order) =>
        order.Id === orderId ? { ...order, InvoiceNum: invoiceInput, ProStatus: '출고완료' } : order
        );
        setOrders(updatedOrders);
        setInvoiceInput('');
    };
    // 필터별로 조회
    const filteredOrders = 
        selectedCategory === 'all'
        ? orders
        : orders.filter((order) => (selectedCategory === 'pending' ? order.ProStatus === '준비중' : order.ProStatus === '출고완료' ));

    return(
        <>
            <SideBar>
                <RightBox>
                    <h1> 판매/주문 관리</h1>
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
                            value="pending"
                            checked={selectedCategory === 'pending'}
                            onChange={() => HandleCategoryChange('pending')}
                            />
                            준비중
                        </label>
                        <label>
                            <input 
                            type="radio"
                            value="shipped"
                            checked={selectedCategory === 'shipped'}
                            onChange={() => HandleCategoryChange('shipped')}
                            />
                            출고완료
                        </label>
                    </div>
                
                    <div className="scrollBox">
                        <table>
                            <thead>
                                <tr>
                                    <th>Order No.</th>
                                    <th>Date</th>
                                    <th>ID</th>
                                    <th>Addr</th>
                                    <th>Tel</th>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Invoice</th>
                                    {/* <th className="btnArea"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.Id}>
                                        <td>{order.Id}</td>
                                        <td>{order.OrderDate}</td>
                                        <td>{order.Email}</td>
                                        <td>{order.Address}</td>
                                        <td>{order.Tel}</td>
                                        <td>{order.OrderProduct}</td>
                                        <td>{order.ProStatus}</td>
                                        <td>
                                            {order.InvoiceNum}
                                            {order.ProStatus === '준비중' ? (
                                                <input
                                                type="text"
                                                placeholder="송장 번호"
                                                value={order.invoiceInput}
                                                onChange={(e) => setInvoiceInput(e.target.value)}
                                                />
                                            ) : null}
                                             {order.ProStatus === '준비중' ? (
                                                <button onClick={() => HandleInvoiceUpload(order.Id)}>입력 </button>
                                            ) : null}                                         
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>          
                </RightBox>
            </SideBar>
        </>
    )
}

export default Adminsales;