import React from "react";

function Contact(){
    return(
        <>

        <div className="main_content">
            <div className="main_content_bg">
            <img src={process.env.PUBLIC_URL+"/assets/images/content-bg.jpg"} alt="" />
            </div>

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

export default Contact;