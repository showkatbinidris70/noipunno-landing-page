import React, { useEffect, useState } from "react";
import AmbassadorImg from "../assets/images/ambassador.jpg";
import Data from "../data.json";

export default function Ambassador() {
  const [ambassadors, setAmbassador] = useState([]);
  const getData = async () => {
    await fetch("mydata.json")
      .then((res) => res.json())
      .then((data) => setAmbassador(data));
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(Data);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchDistric = form.distic_name.value;
    const currentDistric = ambassadors.filter(
      (data) => data.NameDistrict === searchDistric
    );
    setAmbassador(currentDistric);
  };

  return (
    <div>
      <section
        className=""
        style={{
          minHeight: "81vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="container py-5">
          <h1
            className="p-2 rounded"
            style={{
              fontSize: 30,
              color: "#166060",
              backgroundColor: "#fff",
            }}
          >
            Ambassadors List :
          </h1>
          <div className="row">
            <div className="d-flex justify-content-end">
              <div className="">
                <div className="d-flex">
                  <div className="my-2">
                    <form
                      onSubmit={handleSearch}
                      className="form-inline my-2 my-lg-0 d-flex"
                    >
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="distic_name"
                      />
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {ambassadors.map((data, index) => {
              const {
                Sl,
                NameTeacher,
                NameDistrict,
                NameOfInstitute,
                MpoIndex,
                EmailId,
                PdsNo,
                MobileNo,
                Designation,
              } = data;
              return (
                <div key={index} className="col-sm-6 col-md-6 py-2">
                  <div className="card shadow-sm border-0 p-2 h-100">
                    <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                      <div className="">
                        <img
                          src={AmbassadorImg}
                          className="img-fluid ambassador-img"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>Name :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{NameTeacher}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>Designation :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{Designation}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>Institution :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{NameOfInstitute}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>District :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{NameDistrict}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>PDS NO :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{PdsNo}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>Mobile :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{MobileNo}</li>
                          </ul>
                        </div>
                        <div className="d-flex">
                          <ul
                            style={{
                              width: 120,
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>Email :</li>
                          </ul>
                          <ul
                            style={{
                              fontSize: 14,
                              color: "#166060",
                            }}
                          >
                            <li>{EmailId}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
