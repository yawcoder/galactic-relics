import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

function Employee() {
    const idObject = useParams();
    const id = idObject.id

    const [employee, setEmployee] = useState([])

    function getEmployee(){
            Axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Employees/${id}`).then((response) => {
                setEmployee(response.data);
                // console.log(response.data);
            }).catch((error) => {
                console.log(error.response.status)
            })
    }

    useEffect(() => {
        getEmployee();
    }, [])


  return (
    <div>
        <p>{employee.firstName}</p>
        <p>{employee.lastName}</p>
        <p>{employee.emailAddress}</p>
    </div>
  )
}

export default Employee