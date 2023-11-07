import React from "react";

export default function Counter() {
  return (
    <div>
      <div
        className="counter-area cta wow fadeInUp"
        style={{
          visibility: "visible",
          animationName: "fadeInUp",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center py-2">
              <a
                href="#"
                className="single-counter h-100"
              >
                <i className="fa-solid fa-school text-white fs-1" />
                <h1>15K+</h1>
                <p>Number of Institutions</p>
              </a>
            </div>
            <div className="col-md-3 text-center py-2">
              <a
                href="#"
                className="single-counter h-100"
              >
                <i className="fa-solid fa-person-chalkboard text-white fs-1" />
                <h1>400+</h1>
                <p>Number of Teachers</p>
              </a>
            </div>
            <div className="col-md-3 text-center py-2">
              <a
                href="#"
                className="single-counter h-100"
              >
                <i className="fa-solid fa-user-graduate text-white fs-1" />
                <h1>8K+</h1>
                <p>Number of Students</p>
              </a>
            </div>
            <div className="col-md-3 text-center py-2">
              <a
                href="#"
                className="single-counter h-100"
              >
                <i className="fa-solid fa-square-poll-vertical text-white fs-1" />
                <h1>900+</h1>
                <p>Results</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
