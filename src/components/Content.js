import {useState, useEffect} from 'react';
// delete testdata
//vring in axios and useeffect from app.js
import testdata from "../response.json";


import Filters from "./Filters";

const Content = () => {
    const [orderList, setOrderList] = useState([]);
    const [vendor, setVendorName] = useState()

    //testing only. using local data
    useEffect(()=> {
      setOrderList(testdata)
      console.log("use effect fired")
    },[])

console.log("test data", testdata);
console.log("iam orderlist", orderList)
console.log("vendor= ", vendor)
    
//capture vendor selected
const handleSelect = (e) => {
    setVendorName(e.target.value);
    console.log(e.target.value)
 }


    return ( 
        <>
        <Filters vendors={orderList.data} handleSelect={handleSelect}/>
        </>
     );
}
 
export default Content;