import Axios from "axios"
import { useEffect, useState } from "react"

function Employees() {
    const [employees, setEmployees] = useState([])

    function getEmployees(){
        Axios.get("https://bcgalacticgadgetsapi-production.up.railway.app/api/Employees?page=1&pageSize=100").then((response) => {
            setEmployees(response.data);
            console.log(response.data);
        })
    }

    useEffect(() => {
        getEmployees();
    }, [])

  return (
    <div>Allemployees</div>
  )
}

export default Employees