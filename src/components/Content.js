import { useState, useEffect } from "react";
// delete testdata
//vring in axios and useeffect from app.js
// import testdata from "../response.json";
import axios from "axios";

import Filters from "./Filters";
import OrderList from "./OrdersList";

const Content = () => {
  const [orderList, setOrderList] = useState([]);
  const [vendor, setVendorName] = useState("allSuppliers");
  const [sortedVendor, setSortedVendor] = useState([]);

  //testing only.!!!!!! using local data
  //   useEffect(() => {
  //     setOrderList(testdata.data);
  //     setSortedVendor(testdata.data);
  //   }, []);

  // load when component mounts, POST to capture data, set to state
  useEffect(() => {
    let data = {};
    axios({
      url: "https://api.interview.staging.foodieorders.com/v3/orders/search",
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    })
      .then((response) => {
        let responseData = response.data.data;
        setOrderList(responseData);
        setSortedVendor(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //capture vendor selected from the dropdown (Filter component)
  const handleSelect = (e) => {
    setVendorName(e.target.value);
  };

  //view order list by selected supplier/vendor (display in OrdersList component)
  useEffect(() => {
    if (vendor === "allSuppliers") {
      setSortedVendor(orderList);
    } else {
      const mything = orderList.filter((order) => order.vendorName === vendor);
      setSortedVendor(mything);
    }
  }, [vendor, orderList]);

  return (
    <>
      {/* display loading while data is captured */}
      {!orderList && <h2>Data loading....</h2>}

      {/* display main content once data is captured in state */}
      {orderList && (
        <>
          <Filters vendors={orderList} handleSelect={handleSelect} />
          <OrderList orderData={sortedVendor} />
        </>
      )}
    </>
  );
};

export default Content;
