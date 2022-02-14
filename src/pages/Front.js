import React from "react";
import {Outler, Link} from "react-router-dom";

function Front(){
    return(
        <>
            <div className="hero_area ">
                <div className="hero_bg_box">
                <img src={process.env.PUBLIC_URL + '/assets/images/hero-bg.jpg'} alt="" />
                </div>


                {/* slider section */}
                <section className="slider_section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 ">
                        <div className="detail-box">
                        <h1>
                            We Will Take Care <br />
                            Of Your Pets
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem veritatis dolorem voluptas dolore odio pariatur explicabo nesciunt non et obcaecati repellat est sint aliquid, temporibus ab ad eum nisi.
                        </p>
                        <a href="">
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* end slider section */}
            </div>

            <div className="main_content">
                <div className="main_content_bg">
                <img src={process.env.PUBLIC_URL+"/assets/images/content-bg.jpg"} alt="" />
                </div>

                {/* service section */}

                <section className="service_section layout_padding">
                <div className="container py_mobile_45">
                    <div className="heading_container heading_center">
                    <h2> Our Services </h2>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="box ">
                        <div className="img-box">
                            <img src={process.env.PUBLIC_URL+"/assets/images/s1.png"} alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                            Pet Grooming
                            </h5>
                            <p>
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box ">
                        <div className="img-box">
                            <img src={process.env.PUBLIC_URL+"/assets/images/s2.png"} alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                            Pet Checkup
                            </h5>
                            <p>
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box ">
                        <div className="img-box">
                            <img src={process.env.PUBLIC_URL+"/assets/images/s3.png"} alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                            Dental Care
                            </h5>
                            <p>
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="btn-box">
                    <a href="">
                        Read More
                    </a>
                    </div>
                </div>
                </section>

                {/* end service section */}

                {/* about section */}

                <section className="about_section ">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                        <img src={process.env.PUBLIC_URL+"/assets/images/about-img.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                        <div className="heading_container">
                            <h2>
                            About Us
                            </h2>
                        </div>
                        <p>
                            Minima cupiditate fuga animi unde nesciunt esse, voluptas vitae culpa ut impedit quae, totam eum in quis non velit! Aliquid libero voluptas quisquam magnam porro hic atque at numquam vel.
                            Veritatis, magni deleniti optio quod quo nisi repellat quasi quia.
                        </p>
                        <a href="">
                            Read More
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* end about section */}

                {/* care section */}

                <section className="care_section layout_padding">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                        <div className="heading_container">
                            <h2>
                            Best Care For Your Pets
                            </h2>
                        </div>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                        </p>
                        <a href="">
                            Contact Us
                        </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                        <img src={process.env.PUBLIC_URL+"images/care.jpg"} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* end care section */}

                {/* client section */}
                <section className="client_section">
                <div className="container">
                    <div className="heading_container">
                    <h2>
                        Testimonial
                    </h2>
                    </div>
                    <div className="carousel-wrap ">
                    <div className="owl-carousel">
                        <div className="item">
                        <div className="box">
                            <div className="img-box">
                            <img src={process.env.PUBLIC_URL+"/assets/images/c1.jpg"} alt="" />
                            </div>
                            <div className="detail-box">
                            <h5>
                                Zoya Hawk <br />
                                <span>
                                Pet Owner
                                </span>
                            </h5>
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <p>
                                Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="box">
                            <div className="img-box">
                            <img src={process.env.PUBLIC_URL+"images/c2.jpg"} alt="" />
                            </div>
                            <div className="detail-box">
                            <h5>
                                Ryan Jonson <br />
                                <span>
                                Pet Owner
                                </span>
                            </h5>
                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                            <p>
                                Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* end client section */}


                {/* contact section */}

                <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                    <h2>
                        Request A Call back
                    </h2>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form_container">
                        <form action="#">
                            <div>
                            <input type="text" placeholder="Full Name " />
                            </div>
                            <div>
                            <input type="email" placeholder="Email" />
                            </div>
                            <div>
                            <input type="text" placeholder="Phone number" />
                            </div>
                            <div>
                            <input type="text" className="message-box" placeholder="Message" />
                            </div>
                            <div className="d-flex ">
                            <button>
                                SEND
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                        <div className="map">
                            <div id="googleMap"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* end contact section */}
            </div>

            
        </>
    );
}

export default Front;