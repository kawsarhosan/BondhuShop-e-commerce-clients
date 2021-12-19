import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <>
        <div>
            <header className=''>
            <div className="header-inner">
                <div className="container-fluid px-lg-5">
                    <nav className="navbar navbar-expand-lg my-navbar">
                        <Link className="navbar-brand" to="/home"><span className="logo">
                            <img src="/Images/bs-logo.png" alt="" className="img-fluid" style={{width:"250px", margin:"-3px 0px 0px 0px"}} /></span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{margin:"5px 0px 0px 0px"}}></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/">Action</Link>
                                        <Link className="dropdown-item" to="/">Another action</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/">Something else here</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <button className="header-btn my-2 my-sm-0" type="submit">Login</button>
                            </form>
                        </div>
                    </nav>

                </div>
            </div>
            </header>
        </div>
        
        </>
    );
};

export default Header;