import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("All Orders");

    function getOrders(){
        axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders?page=${pageNumber}&pageSize=10`).then((response) => {
            // console.log(response.data.data);
            setOrders(response.data.data);
        }).catch((error) => {
            console.log(error.response.status)
        })
    }

    function getEmployees(){
        axios.get("https://bcgalacticgadgetsapi-production.up.railway.app/api/Employees?page=1&pageSize=100").then((response) => {
            setEmployees(response.data.data);
            // console.log(response.data.data);
        }).catch(function(error){
          console.log(error.response.status)
        })
    }

    function handleChange(event){
        setSelectedEmployee(event.target.value);
    }

    useEffect(() => {
        getOrders();
        getEmployees();
    }, [pageNumber]);

    useEffect(() => {
        if(selectedEmployee !== "All Orders"){
            axios.get(`https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders?employeeId=${selectedEmployee}&page=1&pageSize=100`).then((response) => {
                // console.log(response.data.data);
                setOrders(response.data.data);
            }).catch((error) => {
                console.log(error.response.data);
            })
        }
    }, [selectedEmployee])

    function nextPage(){
        pageNumber > 9 ? setPageNumber(1) : setPageNumber(pageNumber + 1);
    }

    function prevPage(){
        pageNumber < 2 ? setPageNumber(10) : setPageNumber(pageNumber - 1);
    }


  return (
    <div>
        <div>
            <select value={selectedEmployee} onChange={handleChange}>
                <option key="All-orders" value="All Orders">--Select--</option>
                {employees.map((employee) => {
                    return <option key={employee.id} value={employee.id} >{employee.firstName} {employee.lastName}</option>
                })}
            </select>
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