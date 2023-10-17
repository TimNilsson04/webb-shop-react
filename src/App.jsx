import { useState, useEffect } from 'react'
import HomePage from './sites/HomePage'
import Cart from './sites/Cart'
import Product from './sites/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // async function fetchData() {
  //   await fetch('http://localhost:3000/product')
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result.data)
  //       console.log(result.data)
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

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