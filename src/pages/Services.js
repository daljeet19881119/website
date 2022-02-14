import React from "react";

function Service(){
    return(
        <>
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

        </div>

        </>
    )
}

export default Service;