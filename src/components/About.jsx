import React from 'react'

export default function About() {
    return (<div>
        <div className="home2-about-area wow fadeInUp" id="about"
            style={
                {
                    visibility: "visible",
                    animationName: "fadeInUp"
                }
        }>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="about-single-item">
                            <div className="about-single-icon cta about_bg_icon1">
                                <span style={
                                    // {background: "url(./assets/home2-about-icon1.png)"}
                                    {background: "url(../../../assets/images/home2-about-icon1.png)"}
                                }/>
                            </div>
                            <div className="about-single-content">
                                <h4>24/7 Support</h4>
                                <p>
                                    Apps that are not preinstalled are usually available through
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distribution platforms called app stores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="about-single-item">
                            <div className="about-single-icon">
                                <span style={
                                    {background: "url(./src/home2-about-icon2.png)"}
                                }/>
                            </div>
                            <div className="about-single-content">
                                <h4>Data Privacy</h4>
                                <p>
                                    Apps that are not preinstalled are usually available through
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distribution platforms called app stores.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="about-single-item">
                            <div className="about-single-icon">
                                <span style={
                                    {background: "url(./src/home2-about-icon3.png)"}
                                }/>
                            </div>
                            <div className="about-single-content">
                                <h4>24 / 7 Call Center</h4>
                                <p>
                                    Apps that are not preinstalled are usually available through
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  distribution platforms called app stores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
