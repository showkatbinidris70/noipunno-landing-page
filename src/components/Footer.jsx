import React from "react";
import Logo from "../assets/images/logo-noipunno-1-2.png";
import hero_app_logo_1 from "../assets/images/hero-app-logo-1.png";
import hero_app_logo_2 from "../assets/images/hero-app-logo-2.png";
import Vector from "../assets/images/Vector.png";
import NCTB_logo from "../assets/images/NCTB_logo.png";
import Logo_Signature from "../assets/images/Logo_Signature_Container_Circle_ENG_RGB-300x300 1.png";
import Aspire_to_Innovate_Seal from "../assets/images/Aspire_to_Innovate_Seal 2.png";
export default function Footer() {
  return (
    <div>
      <div
        className="footer-area cta wow fadeInUp"
        style={{
          visibility: "visible",
          animationName: "fadeInUp",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-menu">
                <ul id="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/ambassador">Ambassador</a>
                  </li>
                  <li>
                    <a href="/faq">FAQ</a>
                  </li>
                  <li>
                    <a href="/privacy-and-policy">Privacy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 col-md-6">
              <div className="footer-logo d-flex justify-content-center">
                <h4>
                  <a href="#">
                    <img src={Logo} className="img-fluid w-100" alt="" />
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="d-flex justify-content-center ">
                <div
                  className="d-flex gap-2 px-5 py-1"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 43,
                  }}
                >
                  <div
                    className="pe-2"
                    style={{ borderRight: "2px solid #ddd" }}
                  >
                    <div>
                      <h6 className="" style={{ fontSize: "12px" }}>
                        পরিকল্পনা ও বাস্তবায়নে
                      </h6>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: "-0.7rem", height: "18px" }}
                    >
                      <img
                        src={Vector}
                        className="img-fluid hero_icons"
                        alt=""
                      />
                      <img
                        src={NCTB_logo}
                        className="img-fluid hero_icons"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h6 className="" style={{ fontSize: "12px" }}>
                        কারিগরি সহায়তায়
                      </h6>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: "-0.7rem", height: "18px" }}
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
    </div>
  );
}
