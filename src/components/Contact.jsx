import React from 'react'

export default function Contact() {
    return (<div>
        <div className="contact-area cta" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title ctas1">
                            <h2>Contact US</h2>
                            <p>
                                Most such devices are sold with several apps bundled as
                                                                                                                                                        pre-installed software,
                                <br/>
                                such as a web browser, email client, calendar, mapping program.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-lg-1 wow fadeInLeft"
                        style={
                            {
                                visibility: "visible",
                                animationName: "fadeInLeft"
                            }
                    }>
                        <div className="contact-form">
                            <form action="http://crazycafe.net/html/appiyan/contact.php">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Full Name"/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text" placeholder="Subject"/>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Message"
                                            defaultValue={""}/>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="home-2-form-submit">
                                            <input type="submit" defaultValue="Send message"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInRight"
                        style={
                            {
                                visibility: "visible",
                                animationName: "fadeInRight",
                                zIndex: 1
                            }
                    }>
                        <div className="contact-form-right">
                            <div className="contact-form-right-single">
                                <h5>Phone</h5>
                                <a href="tel:4354089068">435 408 9068</a>
                            </div>
                            <div className="contact-form-right-single">
                                <h5>Email</h5>
                                <a href="mailto:contact@appiyan.com">info@noipunno.gov.bd</a>
                            </div>
                            <div className="contact-form-right-single">
                                <h5>Address</h5>
                                <p>NCTB Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
