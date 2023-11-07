import React from "react";
import hero_app_logo_1 from "../assets/images/hero-app-logo-1.png";
import hero_app_logo_2 from "../assets/images/hero-app-logo-2.png";
import Vector from "../assets/images/Vector.png";
import NCTB_logo from "../assets/images/NCTB_logo.png";
import Logo_Signature from "../assets/images/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import Aspire_to_Innovate_Seal from "../assets/images/Aspire_to_Innovate_Seal 2.png";
import dashboard from "../assets/images/dashboard.png";
import { RxDividerVertical } from "react-icons/rx";

export default function Hero() {
  return (
    <div>
      <div className="home2-hero-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4"
              style={{
                visibility: "visible",
                animationName: "fadeInLeft",
              }}
            >
              <div className="home2-hero-mobile">
                <img
                  src={dashboard}
                  className="img-fluid"
                  alt=""
                  style={{
                    width: 300,
                    height: 624,
                    borderRadius: 10,
                  }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 text-center col-md-12 wow fadeInLeft d-flex pt-5 justify-content-center"
              style={{
                visibility: "visible",
                animationName: "fadeInLeft",
              }}
            >
              <div className="home2-hero-text">
                <h1>বিষয়ভিত্তিক মূল্যায়ন</h1>
                <p className="text-white">
                  অনুগ্রহ করে আপনার অ্যাকাউন্টে সাইন ইন করুন
                  <br />
                  এবং অ্যাডভেঞ্চার শুরু করুন
                </p>
                <a className="home2-download-btn" href="#">
                  <img src={hero_app_logo_1} className="img-fluid" alt="" />
                </a>
                <a className="home2-download-btn2" href="#">
                  <img src={hero_app_logo_2} className="img-fluid" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex mt-3 justify-content-lg-end justify-content-center ">
              <div
                className="d-flex gap-2 px-5 py-2"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 43,
                }}
              >
                <div className="pe-2" style={{ borderRight: "2px solid #ddd" }}>
                  <div>
                    <h6 className="">পরিকল্পনা ও বাস্তবায়নে</h6>
                  </div>
                  <div
                    className="d-flex justify-content-around"
                    style={{ marginTop: "-0.7rem" }}
                  >
                    <img src={Vector} className="img-fluid hero_icons" alt="" />
                    <img
                      src={NCTB_logo}
                      className="img-fluid hero_icons"
                      alt=""
                    />
                  </div>
                </div>
                {/* <div>
                  <RxDividerVertical />
                </div> */}
                <div>
                  <div>
                    <h6 className="">কারিগরি সহায়তায়</h6>
                  </div>
                  <div
                    className="d-flex justify-content-around"
                    style={{ marginTop: "-0.7rem" }}
                  >
                    <img
                      src={Logo_Signature}
                      className="img-fluid hero_icons"
                      alt=""
                    />
                    <img
                      src={Aspire_to_Innovate_Seal}
                      className="img-fluid hero_icons"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
