import { useEffect, useState } from "react";
import { SideBar } from "../PublicStyle";
import { RightBox, PaginationContainer, PageButton } from "../admin/Adminmember"
import AdminAxiosApi from "../../api/AdminAxios";



const Adminsales = () =>{
    const [orders, setOrders] = useState([]);
    const [orderstatus, setOrderstatus] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);  // 현재 페이지
    const [totalPage, setTotalPage] = useState(0);      // 총 페이지 수
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isTrue, setIsTrue] = useState(false);
    const [invoiceInput, setInvoiceInput] = useState('');

    // 리렌더링 용
    const reRender = () => {
        setIsTrue((prev) => !prev);
    }
    // 분류 버튼
    const HandleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString('ko-KR', options);
        return formattedDate;
    };

    // 총 페이지 수 계산
    useEffect(() => {
        const totalPage = async () => {
            try {
                const res = await AdminAxiosApi.SalePage(0, 10);
                setTotalPage(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        totalPage();
    }, [])

    useEffect(() => {
        const saleList = async() => {
            try {
                const res = await AdminAxiosApi.SalePageList(currentPage, 10);
                console.log(res.data);
                setOrders(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        saleList();
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

    // 송장번호 입력
    const HandleInvoiceUpload = async(id, orderStatus, InvoiceInput) => {

        try {
            // console.log("아이디 : " + id, "송장번호 : " + invoiceInput);
            const res = await AdminAxiosApi.InvoiceInput(id, "출고완료", InvoiceInput);
            setInvoiceInput("");
          
            if (res.data === true) {
                
                const res = await AdminAxiosApi.SaleAllList(id);

                const updatedOrders = orders.map((order) =>
                order.saleId === id ? { ...order, invoice: invoiceInput, orderStatus: '출고완료' } : order
                );
                setOrders(updatedOrders);
                reRender();
                console.log(res);
                console.log(res.data);
               
            }
        } catch (e) {
            console.error(e);
            alert("숫자만 입력해주세요.");
        }
        
    };


    // 필터별로 조회
    const filteredOrders = 
        selectedCategory === 'all'
        ? orders
        : orders.filter((order) => (selectedCategory === 'pending' ? order.orderStatus === '준비중' : order.orderStatus === '출고완료' ));

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
                                    {/* <th>Tel</th> */}
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Invoice</th>
                                    {/* <th className="btnArea"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{formatDate(order.salesRegDate)}</td>
                                        <td>{order.memberId}</td>
                                        <td>{order.salesAddr}</td>
                                        {/* <td>{order.Tel}</td> */}
                                        <td>{order.feedName}</td>
                                        <td onChange={(e) => setOrderstatus(e.target.value)}>{order.orderStatus}</td>
                                        <td>
                                            {order.invoice}
                                            
                                            <input
                                            type="text"
                                            placeholder="송장 번호"
                                            // value={order.invoiceInput}       // order. 빼면 전체 input에 적힘
                                            onChange={(e) => setInvoiceInput(e.target.value)}
                                            />
                                        
                                            <button onClick={() => HandleInvoiceUpload(order.saleId, order.orderStatus, invoiceInput)}>입력</button>
                                                                          
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

export default Adminsales;