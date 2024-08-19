import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Allproducts() {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    function getProducts() {
        Axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Products?page=${pageNumber}&pageSize=6`)
            .then((response) => {
                setProducts(response.data.data);
                // console.log(response.data.data)
            });
    }

    useEffect(() => {
        getProducts();
    }, [pageNumber]); // Add pageNumber as a dependency

    function nextPage() {
        pageNumber > 4 ? setPageNumber(1) : setPageNumber(pageNumber + 1)
    }

    function prevPage() {
        pageNumber < 2 ? setPageNumber(5) : setPageNumber(pageNumber - 1)
    }

    return (
        <div>
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>{product.name}</Link>
            ))}
            <div>
                <button onClick={prevPage}>Prev</button>
                <span>{pageNumber}</span>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
}

export default Allproducts;
