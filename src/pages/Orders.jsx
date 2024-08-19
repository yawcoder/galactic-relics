import { useEffect, useState } from 'react';
import Axios from 'axios';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    function getOrders(){
        Axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders?page=${pageNumber}&pageSize=10`).then((response) => {
            // console.log(response.data.data);
            setOrders(response.data.data);
        })
    }

    useEffect(() => {
        getOrders();
    }, [pageNumber])

    function nextPage(){
        pageNumber > 9 ? setPageNumber(1) : setPageNumber(pageNumber + 1);
    }

    function prevPage(){
        pageNumber < 2 ? setPageNumber(10) : setPageNumber(pageNumber - 1);
    }


  return (
    <div>
        <div>
            {orders.map((order) => {
                return <p key={order.id}>{order.id}</p>
            })}
        </div>
        <button onClick={prevPage}>Prev</button>
        <span>{pageNumber}</span>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Orders