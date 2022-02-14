import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>
        {/* info section */}

        <section className="info_section layout_padding2">
            <div className="info_container ">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-3 ">
                    <h6>
                    About
                    </h6>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority havThere are many variations of passages of Lorem Ipsum available, but the majority hav </p>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <h6>
                    Useful Link
                    </h6>
                    <div className="info_link-box">
                    <ul>
                        <li className="active">
                        <Link to="/">
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to="/about">
                            About
                        </Link>
                        </li>
                        <li>
                        <Link to="/services">
                            Services
                        </Link>
                        </li>
                        <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <h6>
                    Address
                    </h6>
                    <div className="contact_items">
                    <a href="">
                        <div className="item ">
                        <div className="img-box ">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className="detail-box">
                            <p>
                            Location
                            </p>
                        </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item ">
                        <div className="img-box ">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="detail-box">
                            <p>
                            Call +01 1234567890
                            </p>
                        </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="item ">
                        <div className="img-box ">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div className="detail-box">
                            <p>
                            demo@gmail.com
                            </p>
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 ">
                    <div className="info_form ">
                    <h5>
                        Newsletter
                    </h5>
                    <form action="#">
                        <input type="email" placeholder="Enter your email" />
                        <button>
                        Subscribe
                        </button>
                    </form>
                    <div className="social_box">
                        <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <footer className="container-fluid footer_section ">
            <p>
            &copy; <span id="displayDate"></span> All Rights Reserved. Design by
            <a href="https://html.design/">Free Html Templates</a>
            </p>
        </footer>
        </>
    );
}

export default Footer;