import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Allproducts from './pages/Allproducts';
import Product from './pages/Product';
import Employees from './pages/Employees';
import Employee from './pages/Employee';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/all-products' element={<Allproducts />}/>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/employees' element={<Employees />}/>
        <Route path='/employee/:id' element={<Employee />} />
      </Routes>
    </Router>
  )
}

export default App