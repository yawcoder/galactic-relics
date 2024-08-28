import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Allproducts from './pages/Allproducts';
import Product from './pages/Product';
import Employees from './pages/Employees';
import Employee from './pages/Employee';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Navbar from './components/Navbar';

function App() {

  return (
    
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/all-products' element={<Allproducts />}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/employees' element={<Employees />}/>
        <Route path='/employee/:id' element={<Employee />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/order/:id' element={<Order />} />
      </Routes>
    </Router>
  )
}

export default App