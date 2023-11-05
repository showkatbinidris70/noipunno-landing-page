import React from 'react'
import VideoIcon from '../assets/images/video-icon.png'

export default function Video() {
    return (<div>
        <div className="video-area cta">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow fadeInUp text-center"
                        style={
                            {
                                visibility: "visible",
                                animationName: "fadeInUp"
                            }
                    }>
                        <div className="section-title ctas1">
                            <h2>Watch Video</h2>
                            <p>
                                Most such devices are sold with several apps bundled as
                                                                                                            pre-installed software,
                                <br/>
                                such as a web browser, email client, calendar, mapping program.
                            </p>
                        </div>
                        <div className="video-btn-section">
                            <a href="https://www.youtube.com/watch?v=0WWzgGyAH6Y" className="video-btn mfp-iframe">
                                <img src={VideoIcon}
                                    className='img-fluid'
                                    alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}
