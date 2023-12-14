import { createContext, useEffect, useState } from "react";
export const PayContext = createContext(null);

const PayStore = (props) => {
  const [feedName,setfeedName] = useState();
  const [salesAddr,setsalesAddr] = useState();
  const [salesAutoDelivery,setsalesAutoDelivery] = useState();
  const [salesDelivery,setsalesDelivery] = useState();
  const [salesPrice,setsalesPrice] = useState();

  return (
    <PayContext.Provider
      value={{
        feedName,setfeedName,
        salesAddr,setsalesAddr,
        salesAutoDelivery,setsalesAutoDelivery,
        salesDelivery,setsalesDelivery,
        salesPrice,setsalesPrice,
      }}
    >
      {props.children}
    </PayContext.Provider>
  );
};
export default PayStore;