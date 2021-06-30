
import Filters from "./Filters";



const Orders = ({orderList}) => {

    return ( 
        <>
        <Filters orders={orderList.data}/>
        <h3>order stuff goes here</h3>
        </>
     );
}
 
export default Orders;