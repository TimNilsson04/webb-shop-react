
import '../App.css'
import '../contents/Header.css'
import '../contents/MediaQuery.css'
import Header from '../contents/Header'
import Footer from '../contents/footer'

function Product() {

    return (
        <div>


            <Header />

            <div className="product-card-body">
                <div className="grid-products-top">
                    <div className="wrapper-blue-product">
                        <div className="container-wrapper-blue-product">
                            <div className="top-wrapper-blue-product"></div>
                        </div>
                    </div>
                    <div className="product-information">
                        <div className="center-price-blue-product">
                            <h1>Mobilskal</h1>
                            <p className="">£250</p>
                        </div>
                        <div className="contents-wrapper-blue-product">
                            <h2>Information</h2>


                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industrys standard dummy text ever since the 1500s.
                            </p>

                        </div>
                        <a href="Cart">
                            <button className="button-meny">Add to cart</button>
                        </a>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Product