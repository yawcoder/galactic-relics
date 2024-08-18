import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Employees() {
    const [employees, setEmployees] = useState([])

    function getEmployees(){
        Axios.get("https://bcgalacticgadgetsapi-production.up.railway.app/api/Employees?page=1&pageSize=100").then((response) => {
            setEmployees(response.data.data);
            // console.log(response.data.data);
        })
    }

    useEffect(() => {
        getEmployees();
    }, [])

  return (
    <div>
      {employees.map((employee) => {
        return <Link to={`/employee/${employee.id}`} key={employee.id}><span>{employee.firstName}</span> <span>{employee.lastName}</span></Link>
      })}
    </div>
  )
}

export default Employees