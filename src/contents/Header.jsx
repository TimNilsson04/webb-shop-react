
import '../App.css'
import './Header.css'

function Header() {

    return (
        <>

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
                        <li>
                            <a href="/" className="" aria-label='home'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </a>
                        </li>
                        <li><a href="#" className="">Om oss</a></li>
                    </ul>


                    <div className="search-login">
                        <form action="">
                            <input type="search" placeholder="Search..." required />

                        </form>
                        <div>
                            <a href="/cart" aria-label='cart'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="icons" viewBox="0 0 16 16">
                                <path
                                    d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                            </svg></a>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header