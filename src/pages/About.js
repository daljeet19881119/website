import React from "react";

function About(){
    return(
        <>

            <div className="main_content">
                <div className="main_content_bg">
                <img src={process.env.PUBLIC_URL+"/assets/images/content-bg.jpg"} alt="" />
                </div>

                {/* about section */}

                <section className="about_section layout_padding">
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

            </div>


        </>
    );
}

export default About; 