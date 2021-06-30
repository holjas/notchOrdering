import { useState, useEffect } from "react";
// delete testdata
//vring in axios and useeffect from app.js
import testdata from "../response.json";

import Filters from "./Filters";
import OrderList from "./OrdersList";

const Content = () => {
  const [orderList, setOrderList] = useState([]);
  const [vendor, setVendorName] = useState("allSuppliers");
  const [sortedVendor, setSortedVendor] = useState([]);

  //testing only.!!!!!! using local data
  useEffect(() => {
    setOrderList(testdata.data);
    setSortedVendor(testdata.data);
  }, []);

  //capture vendor selected
  const handleSelect = (e) => {
    setVendorName(e.target.value);
    // console.log(e.target.value);
  };

  //view order list by selected supplier
  useEffect(() => {
    if (vendor === "allSuppliers") {
      setSortedVendor(orderList);
    } else {
      const mything = orderList.filter((order) => order.vendorName === vendor);
      setSortedVendor(mything);
    }
  }, [vendor, orderList]);

  //   console.log("Orderlist ", orderList);
  //   console.log("sortedvendor", sortedVendor);
  // console.log("test data", testdata);
  // console.log("iam orderlist", orderL#2d0d6dist)
  // console.log("vendor= ", vendor)

  return (
    <>
      <Filters vendors={orderList} handleSelect={handleSelect} />
      <OrderList orderData={sortedVendor} />
    </>
  );
};

export default Content;
