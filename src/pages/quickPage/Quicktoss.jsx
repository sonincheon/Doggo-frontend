import { useEffect } from "react";
import { Center } from "../../components/PublicStyle";
import AxiosApi from "../../api/Axios";
import { useNavigate } from "react-router-dom";

const Quicktoss = () =>{
  const navigate = useNavigate();

  useEffect(() => {
    const SaleReg = async () => {
      try {
        const resp = await AxiosApi.SaleReg(); //결제
        if (resp.data === true ){
          navigate("/quick/sucess");
        }else {
          console.log("결제가 실패했습니다.")
          navigate("/quick")
      }
      } catch (e) {
            console.log(e);
      }};
      SaleReg();
    }, []);

    return(
        <>
        <Center>
          <div>결제중 입니다.</div>
        </Center>
        </>)
}

export default Quicktoss;