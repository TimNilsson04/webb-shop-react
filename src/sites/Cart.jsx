
import Header from '../contents/Header'
import Footer from '../contents/footer'
import '../contents/Header.css'
import '../contents/ProductCard.css'
import '../contents/MediaQuery.css'
import '../App.css'
import { useContext } from "react"
import { CartContext } from "../context/cartContextProvider";


function Cart() {
    const cart = useContext(CartContext);


    return (
        <>
            <Header />

            {cart && cart.cart.map((item, index) => {
                return (
                    <li key={index}>
                        <div className="grid-products-top-cart">

                            <div className="product-placement">
                                <div className="wrapper-cart">
                                    <div className="container-wrapper-cart">
                                        <div style={{ backgroundImage: `url(./img/${item.picture})` }} className="top-wrapper-cart"></div>
                                    </div>
                                </div>
                                <div className="product-placement">
                                    {item.name}
                                </div>
                            </div>
                            <div className="grid-products-top">
                                <div className="cart-grid">
                                    [antal]
                                </div>
                                <div className="cart-grid-price">
                                    {item.price}
                                </div>
                            </div>

                        </div>
                        <div className="buy-total">
                            [Totala pris]
                            <button className="button-meny">Betala</button>
                        </div>
                    </li>
                )
            })}
            <Footer />
        </>
    )
}

export default Cart