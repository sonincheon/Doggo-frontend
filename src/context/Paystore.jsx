import { createContext, useEffect, useState } from "react";

export const PayContext = createContext(null);

const PayStore = (props) => {
  const [feedName,setFeedName] = useState();
  const [salesAddr,setSalesAddr] = useState();
  const [salesAutoDelivery,setSalesAutoDelivery] = useState();
  const [salesDelivery,setSalesDelivery] = useState();
  const [salesPrice,setSalesPrice] = useState();
  const [title,setTitle] = useState();




  return (
    <PayContext.Provider
      value={{
        feedName,setFeedName,
        salesAddr,setSalesAddr,
        salesAutoDelivery,setSalesAutoDelivery,
        salesDelivery,setSalesDelivery,
        salesPrice,setSalesPrice,
        title,setTitle
      }}
    >
      {props.children}
    </PayContext.Provider>
  );
};
export default PayStore;