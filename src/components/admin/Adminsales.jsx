import { useEffect, useState } from "react";
import { SideBar } from "../PublicStyle";
import { RightBox, PaginationContainer, PageButton } from "../admin/Adminmember"
import AdminAxiosApi from "../../api/AdminAxios";



const Adminsales = () =>{
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);  // 현재 페이지
    const [totalPage, setTotalPage] = useState(0);      // 총 페이지 수
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isTrue, setIsTrue] = useState(false);
    const [invoiceInput, setInvoiceInput] = useState('');

    const Click = () => {
        setIsTrue((prev) => !prev);
    }
    // 분류 버튼
    const HandleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    // 모든 구매목록 data 가져오기
    // useEffect(() => {
    //     const getAllSale = async () => {
    //         try {
    //             const res = await AdminAxiosApi.SaleAllList();
    //             console.log(res);
    //             console.log(res.data);
    //             setOrders(res.data);
    //             Click();
       
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getAllSale();
    
    // }, []);

    // 총 페이지 수 계산
    useEffect(() => {
        const totalPage = async () => {
            try {
                const res = await AdminAxiosApi.SalePage(0, 10);
                setTotalPage(res.data);
                Click();
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


    const HandleInvoiceUpload = async(id, InvoiceInput) => {

        try {
            console.log(id,InvoiceInput)
            // console.log("아이디 : " + id, "송장번호 : " + invoiceInput);
            const res = await AdminAxiosApi.InvoiceInput(id, InvoiceInput);
          
            if (res.data === true) {
                const res = await AdminAxiosApi.SaleAllList(id);

                const updatedOrders = orders.map((order) =>
                order.saleId === id ? { ...order, invoice: invoiceInput, orderStatus: '출고완료' } : order
                );
                setOrders(updatedOrders);

                console.log(res);
                console.log(res.data);
                console.log("아이디 : " + id, "InvoiceInput?: " + InvoiceInput);
            }
        } catch (e) {
            console.error(e);
            alert("ERROR!!");
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
                                    <th>Tel</th>
                                    <th>Order</th>
                                    <th>Status</th>
                                    <th>Invoice</th>
                                    {/* <th className="btnArea"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.saleId}</td>
                                        <td>{order.salesRegDate}</td>
                                        <td>{order.memberId}</td>
                                        <td>{order.salesAddr}</td>
                                        <td>{order.Tel}</td>
                                        <td>{order.feedName}</td>
                                        <td>{order.orderStatus}</td>
                                        <td>
                                            {order.invoice}
                                            {order.orderStatus === '준비중' ? (
                                                <input
                                                type="text"
                                                placeholder="송장 번호"
                                                value={order.invoiceInput}
                                                onChange={(e) => setInvoiceInput(e.target.value)}
                                                />
                                            ) : null}
                                             {order.orderStatus === '준비중' ? (
                                                <button onClick={() => HandleInvoiceUpload(order.saleId,invoiceInput)}>입력</button>
                                            ) : null}                                         
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