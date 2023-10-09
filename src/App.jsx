import { useState } from 'react'
import './App.css'
import './contents/WorthLessCss.css'
import ProductCard from './contents/ProductCard'

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
        <header>
          <div className="languages-frakt">
            <div className="nav-wrapper">
              <div className="sl-nav">
                Språk:
                <ul>
                  <li><b>Svenska</b> <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <div className="triangle"></div>
                    <ul>
                      <li><i className="sl-flag flag-swe">
                        <div id="germany"></div>
                      </i> <span className="active">Svenska</span></li>
                      <li><i className="sl-flag flag-usa">
                        <div id="germany"></div>
                      </i> <span>Engelska</span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="smol-text-2">Bara 500£ I Frakt!</p>
            </div>
          </div>
          <div className="header-bottom">
            <ul className="">
              <a href="/" className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons"
                  viewBox="0 0 16 16">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </a>
              <li><a href="index.html" className="">Hem</a></li>
              <li><a href="#" className="">Om oss</a></li>
            </ul>


            <div className="search-login">
              <form action="">
                <input type="search" placeholder="Search..." required />

              </form>
              <div>
                <a href="cart.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" className="icons" viewBox="0 0 16 16">
                  <path
                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg></a>
              </div>

            </div>
          </div>
        </header>

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
                  <tr>
                    <th>Mobilskal</th>
                    <th>Information</th>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </td>
                    <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </td>
                  </tr>
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


        <footer>
          <div className="footer">
            <div className="company-inc">
              <a href="/" className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons"
                  viewBox="0 0 16 16">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </a>
              <span className="">© 2023 Company, Inc</span>
            </div>
            <ul className="socials">
              <li className="">
                <a className="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" className="icons" viewBox="0 0 16 16">
                  <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg></a>
              </li>
              <li className="">
                <a className="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" className="icons" viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg></a>
              </li>
              <li className="">
                <a className="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" className="icons" viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg></a>
              </li>
            </ul>
          </div>
          <p className="smol-text">
            Images used in this website are taken from
          </p>
          <ul className="smol-text">
            <li><a href="https://unsplash.com/@achera">Alina Chernysheva in Unsplash</a></li>
            <li><a href="https://unsplash.com/@jascentleung">Jascent Leung in Unsplash</a></li>
          </ul>

        </footer>

      </body>
    </>
  )
}

export default App