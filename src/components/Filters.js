import {useState} from 'react';

const Filters = ({vendors, handleSelect}) => {

  

    return (
    <>
    <p>Supplier</p>
    <label htmlFor="sortByList" className="sr-only">sort supplier by</label>
    <select name="sortByList" id="sortByList" onChange={handleSelect} >
    <option value="allSuppliers">All Suppliers</option>
       {/* dropdown menu populated with all supplies */}
        {vendors && vendors.map((order) => {
     return (
         <option
         value={order.vendorName}
         key={order.id}
         >
             {order.vendorName}
        </option>
     )
 })}
</select>
<button>Reset Filters</button>
    </>
    );
}
 
export default Filters;