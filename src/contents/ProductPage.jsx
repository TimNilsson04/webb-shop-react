
import '../App.css'
import '../contents/Header.css'
import '../contents/MediaQuery.css'
import Header from '../contents/Header'
import Footer from '../contents/footer'
import { CartContext } from "../context/cartContextProvider";
import { useState, useEffect, useContext } from "react"


function ProductPage(props) {

    const { addToCart } = useContext(CartContext);


    return (
        <div>


            <Header />



            <div /* key={props.id}*/ className="product-card-body">
                <div className="grid-products-top">
                    <div className="wrapper-blue-product">
                        <div className="container-wrapper-blue-product">
                            <div style={{ backgroundImage: `url(../img/${props.picture})` }} className="top-wrapper-blue-product"></div>
                        </div>
                    </div>
                    <div className="product-information">
                        <div className="center-price-blue-product">
                            <h1>{props.name}</h1>
                            <p className="">{props.price}£</p>
                        </div>
                        <div className="contents-wrapper-blue-product">
                            <h2>Information</h2>


                            <p>
                                {props.description}
                            </p>
                            <p>
                                {props.description}
                            </p>

                        </div>

                        <button onClick={() => { addToCart(props) }} className="button-meny">Add to cart</button>

                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default ProductPage


