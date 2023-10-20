
import '../App.css'
import '../contents/Header.css'
import '../contents/MediaQuery.css'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ProductPage from '../contents/ProductPage'

function Product() {

    const [data, setData] = useState([])
    const { id } = useParams();

    async function fetchData() {
        await fetch('http://localhost:3000/product/' + id)
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
        console.log(data)
    }, [])


    return (
        < ProductPage
            key={data.id}
            picture={data.picture}
            name={data.name}
            description={data.description}
            price={data.price}
        />

    )
}

export default Product