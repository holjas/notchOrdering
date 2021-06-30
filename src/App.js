
// import axios from 'axios';
import Navbar from './components/Navbar';
import Content from "./components/Content";





function App() {



  // ----------------
// useEffect(() => {
//   let data = {};
//    axios({
//      url: "http://api.interview.staging.foodieorders.com/v3/orders/search",
//      method: "POST",
//      headers: { 
//       'Content-Type': 'text/plain'
//     },
//       data : data
//    }).then( (response) => {
//     setOrders(response.data.data)
//   })
//   .catch( (error) =>  {
//     console.log(error);
//   });
// },[])




  return (
    <div className="App">
      <Navbar/>
      <Content/>

   
    </div>
  );
}

export default App;
