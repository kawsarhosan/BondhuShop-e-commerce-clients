import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div>
            <section className="content-banner" style={{
                color: "#000",
                backgroundImage: 'url("/Images/banner3.jpg")',
                minHeight:"400px",
                height:"100%",
                position: "relative",
                backgroundPosition:" center center",
                backgroundSize: "cover",
             
                padding: "194px 0px"
            }}>

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="banner-con text-center">
                                <p className="first-title">Busy life, Easy buy.</p>
                                <p className="banner-des">ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR</p>
                                <Link to='/' target="_blank" className="banner-btn">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;