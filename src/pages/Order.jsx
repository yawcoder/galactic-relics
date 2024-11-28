import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Order() {
  const idObject = useParams();
  const id = idObject.id;

  const [order, setOrder] = useState([]);

  function getOrder() {
    axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders/${id}`).then((response) => {
      console.log(response.data);
      setOrder(response.data);
    }).catch((error) => {
      console.log(error.response.status);
    })
  }

  function formatDate(date) {
    const stringDate = new Date(date);
    return (`${stringDate.getDate()}/${stringDate.getMonth()}/${stringDate.getFullYear()}`)
  }

  useEffect(() => {
    getOrder();
  }, [])


  return (
    <div className="">
      <h2>ORDER #{order.id}</h2>
      <section>
        <h1>GALACTIC RELICS</h1>
        <p>Customer #{order.customerId}</p>
        <div>
          <p>Date: {formatDate(order.orderDate)}</p>
          <p>Invoice No: {order.id}</p>
        </div>
        <div>
          <p>Pay to:</p>
          <p>Galactic Relics</p>
          <p>1 Relic Way</p>
          <p>Warehouse 42</p>
          <p>Phoenix Base, Atollon, 12378</p>
        </div>
        <div>
          <p>Ship to:</p>
          {order.customer && (
            <>
              <p><span>{order.customer.firstName}</span> <span>{order.customer.lastName}</span></p>
              <p>{order.customer.address}</p>
              <p>{order.customer.address2}</p>
              <p>{order.customer.city}, {order.customer.state}, {order.customer.zipCode}</p>
            </>

          )}
        </div>
      </section>
    </div>
  )
}

export default Order