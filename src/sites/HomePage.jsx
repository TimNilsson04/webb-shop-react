import { useState, useEffect } from 'react'
import '../App.css'
import '../contents/Header.css'
import '../contents/MediaQuery.css'
import ProductCard from '../contents/ProductCard'
import Header from '../contents/Header'
import Footer from '../contents/footer'
import BigProductCard from '../contents/BigProductCard'

function HomePage() {
    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(result => {
                setData(result.data)
                console.log(result.data)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div>

            <Header />

            <div className="hero">
                <h1 className="hero-text">Safe Case</h1>
            </div>
            <p className="smol-text">
                Image taken from Alina Chernysheva in Unsplash
            </p>


            <div className="meny">
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Mönstrade skal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Spegelskal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Genomskinliga skal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Silikonskal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Tunna skal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Konstläderskal</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">Plånboksfodral</h2>
                    </button>
                </a></div>
                <div><a href='#'>
                    <button className="button-meny">
                        <h2 className="border-case">MagSafe skal</h2>
                    </button>
                </a></div>
            </div>

            <div className="grid-products-top">

                <div>

                    {data[0] ? (
                        <>
                            <BigProductCard
                                picture={data[3].picture}
                                description={data[2].description}
                                name={data[2].name}
                                price={data[1].price}
                            />

                        </>
                    ) : (
                        <p>Products is currently loading</p>
                    )
                    }
                </div>

                <div className="grid-products-top">
                    {data.map((item) => (
                        < ProductCard
                            key={item.id}
                            picture={item.picture}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    ))}

                </div>
            </div>

            <div className="grid-products">
                {data.map((item) => (
                    < ProductCard
                        key={item.id}
                        picture={item.picture}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>

            <Footer />

        </div>
    )
}

export default HomePage