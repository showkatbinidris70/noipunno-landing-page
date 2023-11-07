import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/images/logo-noipunno-1-2.png";

export default function Header() {
  return (
    <div className="">
      <div className="bg-white sticky-top">
        <div className="container-fluid sticky-top bg-white">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-expand-lg navbar-ligh">
                <div className="container-fluid">
                  <div className="logo cta">
                    <a href="/">
                      <img src={Logo} className="img-fluid" alt="" />
                    </a>
                  </div>
                  <button
                    className="navbar-toggler border-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          <Link to="/">Home</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#about">
                          <Link to="/about">About</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/ambassador.html">
                          <Link to="/ambassador">Ambassador</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/faq.html">
                          <Link to="/faq">FAQ</Link>
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" href="/faq.html">
                          <Link to="/privacy-and-policy">pp</Link>
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="/#contact">
                          <Link to="/contact">Contact</Link>
                        </a>
                      </li>
                      <a
                        href="/"
                        className="header-btn-faq cta"
                        style={{ marginTop: "-0.4rem !important" }}
                      >
                        Login
                      </a>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
