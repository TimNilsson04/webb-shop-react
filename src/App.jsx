import HomePage from './sites/HomePage'
import Cart from './sites/Cart'
import Product from './sites/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/cartContextProvider'


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
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App