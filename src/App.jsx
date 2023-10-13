import { useState } from 'react'
import HomePage from './sites/HomePage'
import Cart from './sites/Cart'
import Product from './sites/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App