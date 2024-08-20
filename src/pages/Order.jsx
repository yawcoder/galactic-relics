import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Order() {
  const idObject = useParams();
  const id = idObject.id;

  const [order, setOrder] = useState([]);

  function getOrder(){
    axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders/${id}`).then((response) => {
      // console.log(response.data);
      setOrder(response.data)
    }).catch((error) => {
      console.log(error.response.status);
    })
  }

  useEffect(() => {
    getOrder();
  }, [])


  return (
    <div>Order</div>
  )
}

export default Order