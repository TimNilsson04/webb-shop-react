
import './ProductCard.css'
import './Header.css'

function BigProductCard(props) {
    let {
        name,
        picture,
        description,
        price,

    } = props;

    // let {picture} = props

    return (
        <>

            <div className="wrapper-blue">
                <div className="container-wrapper-blue">
                    <div style={{ backgroundImage: `url(img/${picture})` }} className="top-wrapper-blue"></div>
                    <div className="center-price-blue">
                        <div className="center-price-grid-blue">
                            <h1>{name}</h1>
                            <p className="price-blue">{price}£</p>
                        </div>
                        <a href="Product"><button aria-label='cart' type="button" className="cart"><svg xmlns="http://www.w3.org/2000/svg"
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
                                    <th>Mobilskal
                                        Information
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        {description}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigProductCard