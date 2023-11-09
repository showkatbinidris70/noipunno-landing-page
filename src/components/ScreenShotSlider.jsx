import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderImg1 from "../assets/images/1.png";
import SliderImg2 from "../assets/images/2.png";
import SliderImg3 from "../assets/images/3.png";
import SliderImg4 from "../assets/images/4.png";
import SliderImg5 from "../assets/images/5.png";
import SliderImg6 from "../assets/images/6.png";

export default function ScreenShotSlider() {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="screenshot-area cta2">
        <div className="container">
          <div className="row pb-3">
            <div
              className="col-md-12 wow fadeInUp text-center"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
              }}
            >
              <div className="section-title">
                <h2>Screenshots</h2>
                <p>
                  Most such devices are sold with several apps bundled as
                  pre-installed software,
                  <br />
                  such as a web browser, email client, calendar, mapping
                  program.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <Slider {...settings}>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide">
                    <img
                      src={SliderImg1}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide d-flex justify-content-center">
                    <img
                      src={SliderImg2}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide d-flex justify-content-center">
                    <img
                      src={SliderImg3}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide d-flex justify-content-center">
                    <img
                      src={SliderImg4}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide d-flex justify-content-center">
                    <img
                      src={SliderImg5}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  className="owl-item active cloned d-flex justify-content-center"
                  style={{
                    width: "293.333px",
                    marginRight: 20,
                  }}
                >
                  <div className="home2-screenshot-single-slide d-flex justify-content-center">
                    <img
                      src={SliderImg6}
                      alt=""
                      style={{
                        maxWidth: 220,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
