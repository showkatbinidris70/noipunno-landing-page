import React from "react";

export default function FAQ() {
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
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="col-12">
                <ul className="nav d-flex justify-content-center">
                  <li
                    className="nav-item h-100"
                    style={{ minWidth: 280 }}
                  >
                    <a
                      className="nav-link link-secondary"
                      id="general-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#general"
                      href="#"
                    >
                      <div className="card border-0 shadow-sm h-100 faq-card">
                        <div className="p-3 text-center">
                          <div>
                            <i className="fa-solid fa-clipboard-question text-secondary fs-1 py-3" />
                            <h6>General Questions</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item h-100" style={{ minWidth: 280 }}>
                    <a
                      className="nav-link link-secondary"
                      id="institutions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#institutions"
                      href="#"
                    >
                      <div className="card border-0 shadow-sm h-100 faq-card">
                        <div className="p-3 text-center">
                          <div>
                            <i className="fa-solid fa-clipboard-question text-secondary fs-1 py-3" />
                            <h6>Institutions Questions</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item h-100" style={{ minWidth: 280 }}>
                    <a
                      className="nav-link link-secondary"
                      id="teacher-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#teacher"
                      href="#"
                    >
                      <div className="card border-0 shadow-sm h-100 faq-card">
                        <div className="p-3 text-center">
                          <div>
                            <i className="fa-solid fa-clipboard-question text-secondary fs-1 py-3" />
                            <h6>Teachers Questions</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-4" id="tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    <div className="card shadow-sm p-2">
                      <div
                        className="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="accordion" id="accordionExample">
                          <h5 style={{ color: "#166060" }}>
                            General Questions :
                          </h5>
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Accordion Item #1
                                  </button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Accordion Item #2
                                  </button>
                                </h2>
                                <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingThree"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Accordion Item #3
                                  </button>
                                </h2>
                                <div
                                  id="collapseThree"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingThree"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingFour"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    Accordion Item #4
                                  </button>
                                </h2>
                                <div
                                  id="collapseFour"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingFour"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingFive"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                  >
                                    Accordion Item #5
                                  </button>
                                </h2>
                                <div
                                  id="collapseFive"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingFive"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingSix"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix"
                                    aria-expanded="false"
                                    aria-controls="collapseSix"
                                  >
                                    Accordion Item #6
                                  </button>
                                </h2>
                                <div
                                  id="collapseSix"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingSix"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingSeven"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven"
                                  >
                                    Accordion Item #7
                                  </button>
                                </h2>
                                <div
                                  id="collapseSeven"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingSeven"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingEight"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseEight"
                                    aria-expanded="false"
                                    aria-controls="collapseEight"
                                  >
                                    Accordion Item #8
                                  </button>
                                </h2>
                                <div
                                  id="collapseEight"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingEight"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="institutions"
                    role="tabpanel"
                    aria-labelledby="institutions-tab"
                  >
                    <div className="card shadow-sm p-2">
                      <div
                        className="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="accordion" id="accordionInstitutions">
                          <h5 style={{ color: "#166060" }}>
                            Institutions Questions :
                          </h5>
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="headingi">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapsei"
                                    aria-expanded="true"
                                    aria-controls="collapsei"
                                  >
                                    Accordion Item #1
                                  </button>
                                </h2>
                                <div
                                  id="collapsei"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingi"
                                  data-bs-parent="#accordionInstitutions"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="headingii">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseii"
                                    aria-expanded="false"
                                    aria-controls="collapseii"
                                  >
                                    Accordion Item #2
                                  </button>
                                </h2>
                                <div
                                  id="collapseii"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingii"
                                  data-bs-parent="#accordionInstitutions"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2
                                  className="accordion-header"
                                  id="headingiii"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseiii"
                                    aria-expanded="true"
                                    aria-controls="collapseiii"
                                  >
                                    Accordion Item #3
                                  </button>
                                </h2>
                                <div
                                  id="collapseiii"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingiii"
                                  data-bs-parent="#accordionInstitutions"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="headingiv">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseiv"
                                    aria-expanded="false"
                                    aria-controls="collapseiv"
                                  >
                                    Accordion Item #4
                                  </button>
                                </h2>
                                <div
                                  id="collapseiv"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingiv"
                                  data-bs-parent="#accordionInstitutions"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="teacher"
                    role="tabpanel"
                    aria-labelledby="teacher-tab"
                  >
                    <div className="card shadow-sm p-2">
                      <div
                        className="panel-group"
                        id="accordion"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="accordion" id="accordionTeacher">
                          <h5 style={{ color: "#166060" }}>
                            Teachers Questions :
                          </h5>
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="heading1">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse1"
                                    aria-expanded="true"
                                    aria-controls="collapse1"
                                  >
                                    Accordion Item #1
                                  </button>
                                </h2>
                                <div
                                  id="collapse1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="heading1"
                                  data-bs-parent="#accordionTeacher"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="heading2">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse2"
                                    aria-expanded="false"
                                    aria-controls="collapse2"
                                  >
                                    Accordion Item #2
                                  </button>
                                </h2>
                                <div
                                  id="collapse2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="heading2"
                                  data-bs-parent="#accordionTeacher"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="heading3">
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse3"
                                    aria-expanded="true"
                                    aria-controls="collapse3"
                                  >
                                    Accordion Item #3
                                  </button>
                                </h2>
                                <div
                                  id="collapse3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="heading3"
                                  data-bs-parent="#accordionTeacher"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the first item's accordion body.
                                    </strong>{" "}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item my-1">
                                <h2 className="accordion-header" id="heading4">
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse4"
                                    aria-expanded="false"
                                    aria-controls="collapse4"
                                  >
                                    Accordion Item #4
                                  </button>
                                </h2>
                                <div
                                  id="collapse4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="heading4"
                                  data-bs-parent="#accordionTeacher"
                                >
                                  <div className="accordion-body">
                                    <strong>
                                      This is the second item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
