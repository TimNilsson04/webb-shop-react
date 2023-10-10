import { useState } from 'react'
import './App.css'
import './contents/Header.css'
import './contents/MediaQuery.css'
import ProductCard from './contents/ProductCard'
import Header from './contents/Header'
import Footer from './contents/footer'

function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    await fetch('http://localhost:8080')
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

      <body>

        <Header />


        <div className="hero">
          <h1 className="hero-text">Safe Case</h1>
        </div>
        <p className="smol-text">
          Image taken from Alina Chernysheva in Unsplash
        </p>


        <div className="meny">
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Mönstrade skal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Spegelskal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Genomskinliga skal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Silikonskal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Tunna skal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Konstläderskal</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">Plånboksfodral</h2>
            </button>
          </a></div>
          <div><a>
            <button className="button-meny">
              <h2 className="border-case">MagSafe skal</h2>
            </button>
          </a></div>
        </div>

        <div className="grid-products-top">

          <div className="wrapper-blue">
            <div className="container-wrapper-blue">
              <div className="top-wrapper-blue"></div>
              <div className="center-price-blue">
                <div className="center-price-grid-blue">
                  <h1>Mobilskal</h1>
                  <p className="price-blue">£250</p>
                </div>
                <a href="/product.html"><button type="button" className="cart"><svg xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" fill="currentColor" className="bi bi-cart-check-blue"
                  viewBox="0 0 16 16">
                  <path
                    d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                  <path
                    d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg></button></a>
              </div>
            </div>
            <div className="inside-wrapper-blue">
              <div className="icon-blue"><i className="material-icons-blue">info</i></div>
              <div className="contents-wrapper-blue">
                <table>
                  <tbody>
                    <tr>
                      <th>Mobilskal</th>
                      <th>Information</th>
                    </tr>
                    <tr>
                      <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industrys standard dummy text ever since the 1500s.
                      </td>
                      <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industrys standard dummy text ever since the 1500s.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="grid-products-top">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div className="grid-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Footer />

      </body>
    </>
  )
}

export default App