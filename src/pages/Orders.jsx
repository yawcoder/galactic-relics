import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    function getOrders(){
        axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders?page=${pageNumber}&pageSize=10`).then((response) => {
            console.log(response.data.data);
            setOrders(response.data.data);
        }).catch((error) => {
            console.log(error.response.status)
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
                return (
                    <div key={order.id}>
                        <p><span>{order.customer.firstName}</span> <span>{order.customer.lastName}</span></p>
                        <Link to={`/order/${order.id}`}><button>View Invoice</button></Link>
                    </div>
                )
            })}
        </div>
        <button onClick={prevPage}>Prev</button>
        <span>{pageNumber}</span>
        <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Orders