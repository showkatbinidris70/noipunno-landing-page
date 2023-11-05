import React from 'react'
import Logo from '../assets/images/logo-noipunno-1-2.png'
export default function Footer() {
    return (<div>
        <div className="footer-area cta wow fadeInUp"
            style={
                {
                    visibility: "visible",
                    animationName: "fadeInUp"
                }
        }>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-menu">
                            <ul id="footer-list">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#ambassador">Ambassador</a>
                                </li>
                                <li>
                                    <a href="#faq">FAQ</a>
                                </li>
                                <li>
                                    <a href="#privacy-and-policy">Privacy &amp; Policy</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-social-icon">
                            <a href="http://crazycafe.net/html/appiyan/home2.html#">
                                <i className="fa-brands fa-facebook-f"/>
                            </a>
                            <a href="http://crazycafe.net/html/appiyan/home2.html#">
                                <i className="fa-brands fa-twitter"/>
                            </a>
                            <a href="http://crazycafe.net/html/appiyan/home2.html#">
                                <i className="fa-brands fa-linkedin-in"/>
                            </a>
                            <a href="http://crazycafe.net/html/appiyan/home2.html#">
                                <i className="fa-brands fa-instagram"/>
                            </a>
                            <a href="http://crazycafe.net/html/appiyan/home2.html#">
                                <i className="fa-brands fa-google-plus-g"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-logo">
                            <h4>
                                <a href="#">
                                    <img src={Logo}
                                        className='img-fluid'
                                        alt=''/>
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
