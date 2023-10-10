
import Header from '../contents/Header'
import Footer from '../contents/footer'
import '../contents/Header.css'
import '../contents/ProductCard.css'
import '../contents/MediaQuery.css'
import '../App.css'


function Cart() {

    return (
        <>
            <Header />

            <div className="grid-products-top-cart">
                <div className="product-placement">
                    <div className="wrapper-cart">
                        <div className="container-wrapper-cart">
                            <div className="top-wrapper-cart"></div>
                        </div>
                    </div>
                    <div className="product-placement">
                        [namn]
                    </div>
                </div>
                <div className="grid-products-top">
                    <div className="cart-grid">
                        [antal]
                    </div>
                    <div className="cart-grid-price">
                        [pris]
                    </div>
                </div>

            </div>
            <div className="buy-total">
                [Totala pris]
                <button className="button-meny">Betala</button>
            </div>

            <Footer />
        </>
    )
}

export default Cart