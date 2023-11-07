import React, { useEffect, useState } from "react";
import AmbassadorImg from "../assets/images/ambassador.jpg";
import data from "../data.json";

export default function Ambassador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (searchTerm) => {
    const filteredData = data.filter((item) =>
      item.NameDistrict.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
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
                    <form className="form-inline my-2 my-lg-0 d-flex">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleInputChange}
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
            {filteredData.map((item) => {
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
                <div key={item.Sl} className="col-md-6 col-lg-6 p-2">
                  <div className="card shadow-sm border-0 p-2 h-100">
                    <div className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                      <div className="">
                        <img
                          src={AmbassadorImg}
                          className="img-fluid ambassador-img"
                          alt=""
                        />
                      </div>
                      <div className="px-2 d-flex justify-content-center">
                        <div>
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
                              <li>{item.NameTeacher}</li>
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
                              <li>{item.Designation}</li>
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
                                fontSize: 12,
                                color: "#166060",
                              }}
                            >
                              <li>{item.NameOfInstitute}</li>
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
                              <li>{item.NameDistrict}</li>
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
                              <li>{item.PdsNo}</li>
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
                              <li>{item.MobileNo}</li>
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
                              <li>{item.EmailId}</li>
                            </ul>
                          </div>
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
