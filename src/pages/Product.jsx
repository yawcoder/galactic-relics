import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
    const idObject = useParams();
    const id = idObject.id;

    const [product, setProduct] = useState([])

    function getProduct(){
        axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Products/${id}`).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getProduct();
    }, [])


  return (
    <div>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
  )
}

export default Product