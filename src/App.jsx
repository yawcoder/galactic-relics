import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Allproducts from './pages/Allproducts';
import Product from './pages/Product';
import Employees from './pages/Employees';
import Employee from './pages/Employee';
import Orders from './pages/Orders';
import Order from './pages/Order';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/all-products' element={<Allproducts />}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/employees' element={<Employees />}/>
        <Route path='/employee/:id' element={<Employee />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order/:1d' element={<Order />} />
      </Routes>
    </Router>
  )
}

export default App