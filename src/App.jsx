import { useState } from 'react'
import HomePage from './sites/HomePage'
import Cart from './sites/Cart'
import Product from './sites/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    await fetch('http://localhost:3000')
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
  }


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