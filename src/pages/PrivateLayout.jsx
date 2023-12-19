
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Common from '../utill/Common';



// 접근 제한 컴포넌트
const PrivateLayout = () => {
  const navigate =useNavigate();

  useEffect(()=>{
    const LoginStatus = async() => {
    const accessToken = Common.getAccessToken();
    try{
        const token= await Common.IsLogin();
        console.log(token)
        if(token.data === true){
        console.log("환영합니다^^");
      }else{
        alert("로그인 해주세요!");
        navigate("/login");
      }
      }catch(e){
        console.log(e)
      //   if (e.response.status === 401) {
      //     console.log(accessToken);
      //     console.log(e.response.status);
      // try{await Common.handleUnauthorized();
      //     const newToken = Common.getAccessToken();
      //       console.log(newToken);
      //     if (newToken !== accessToken) {
      //     const token = await Common.IsLogin();
      //     if(token.data === true){
      //       console.log("환영합니다^^");
      //     }else{
      //       alert("로그인 해주세요!");
      //       navigate("/");
      //     }}
      //   }catch(e){
      //     console.log(e)
      //     console.log("안되니?")
      //     navigate("/");
      //     }
      //   }else{navigate("/");}
    }
  };
  LoginStatus();
},[]);

  return (
    <>
      <Outlet/>
    </>
  );
};

export default PrivateLayout;