import { useEffect, useState } from 'react';
import Axios from 'axios';

function Categories() {
    const[categories, setCategories] = useState([]);

    useEffect(() => {
        function getCategories(){
            Axios.get("https://bcgalacticgadgetsapi-production.up.railway.app/api/Categories").then((response)=>{
                setCategories(response.data);
            })
        }
        getCategories();
    }, [])


  return (
    <div>
        {categories.map((category) => {
            return <p key={category.id}>{category.name}</p>
        })}
    </div>
  )
}

export default Categories