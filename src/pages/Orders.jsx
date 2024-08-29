import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageFiller from 'react-image-filler';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


function Orders() {
    const [orders, setOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState("All Orders");

    function getOrders() {
        let url = `https://bcgalacticgadgetsapi-production.up.railway.app/api/Orders?`;

        if (selectedEmployee !== "All Orders") {
            url += `employeeId=${selectedEmployee}&page=1&pageSize=10`;
        } else {
            url += `page=${pageNumber}&pageSize=10`;
        }
        // console.log(url)

        axios.get(url).then((response) => {
            // console.log(response.data.data);
            setOrders(response.data.data);
        }).catch((error) => {
            console.log(error.response.status);
        })
    }

    function getEmployees() {
        axios.get("https://bcgalacticgadgetsapi-production.up.railway.app/api/Employees?page=1&pageSize=100").then((response) => {
            setEmployees(response.data.data);
            // console.log(response.data.data);
        }).catch(function (error) {
            console.log(error.response.status);
        })
    }

    function handleChange(event) {
        setSelectedEmployee(event.target.value);
        setPageNumber(1);
    }


    function nextPage() {
        if (selectedEmployee !== "All Orders") {
            setPageNumber(1);
        } else {
            pageNumber > 9 ? setPageNumber(1) : setPageNumber(pageNumber + 1);
        }
    }

    function prevPage() {
        if (selectedEmployee !== "All Orders") {
            setPageNumber(1)
        } else {
            pageNumber < 2 ? setPageNumber(10) : setPageNumber(pageNumber - 1);
        }
    }

    useEffect(() => {
        getOrders();
        getEmployees();
    }, [pageNumber, selectedEmployee]);

    return (
        <div className="w-full">
            <div className="flex justify-between px-5 items-center mt-5 w-full md:w-11/12 md:mx-auto">
                <h1 className="font-bold text-xl md:text-4xl text-gray-600">GALACTIC RELICS</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-center text-gray-600">Orders by Employee</p>
                    <select value={selectedEmployee} onChange={handleChange} className="border-[1px] px-2 py-1 rounded-lg border-gray-600 text-gray-600 outline-none">
                        <option key="All-orders" value="All Orders" className="w-full">-Select-</option>
                        {employees.map((employee) => {
                            return <option key={employee.id} value={employee.id} className="w-full">{employee.firstName} {employee.lastName}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="mt-5 flex flex-col">
                {
                    selectedEmployee === "All Orders" ?
                        <div className="w-5/6 border-[1px] mx-auto h-72 rounded-lg border-gray-400 p-4">
                            <ImageFiller width={80} height={80} className="mx-auto rounded-full" />
                            <p className="uppercase">All Orders</p>
                            <p>Total Orders: {orders.length}</p>
                            <div className="max-w-max mx-auto mt-5">
                                <button onClick={prevPage} className="bg-gray-600 p-3 rounded-full text-white text-xl"><GoArrowLeft /></button>
                                <span className="mx-3">Page {pageNumber}</span>
                                <button onClick={nextPage} className="bg-gray-600 p-3 rounded-full text-white text-xl"><GoArrowRight /></button>
                            </div>
                        </div>
                        :
                        employees.filter((employee) => {
                            return employee.id == selectedEmployee;
                        }).map((employee) => {
                            return <div key={employee.id} className="w-5/6 border-[1px] mx-auto h-72 rounded-lg border-gray-400 p-4">
                                <ImageFiller width={80} height={80} className="mx-auto rounded-full" />
                                <p className="uppercase">{employee.firstName} {employee.lastName}</p>
                                <p className="mt-3">{employee.emailAddress}</p>
                                <p className="mt-3 text-xl">Total Orders: {orders.length}</p>
                                <div className="max-w-max mx-auto mt-5">
                                    <button onClick={prevPage} className="bg-gray-600 p-3 rounded-full text-white text-xl"><GoArrowLeft /></button>
                                    <span className="mx-3">Page {pageNumber}</span>
                                    <button onClick={nextPage} className="bg-gray-600 p-3 rounded-full text-white text-xl"><GoArrowRight /></button>
                                </div>
                            </div>
                        })
                }
                <div>
                    {orders.map((order) => {
                        return (
                            <div key={order.id}>
                                <p><span>{order.customer.firstName}</span> <span>{order.customer.lastName}</span></p>
                                <Link to={`/order/${order.id}`} className="bg-gray-500"><button>View Invoice</button></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={prevPage}>Prev</button>
            <span>{pageNumber}</span>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}

export default Orders