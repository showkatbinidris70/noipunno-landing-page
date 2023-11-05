import React from 'react'

export default function FAQ() {
    return (<div>
        <section className=""
            style={
                {
                    minHeight: "81vh",
                    backgroundColor: "#f5f5f5"
                }
        }>
            <div className="container py-5">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="col-12">
                            <ul className="nav d-flex justify-content-center">
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>General Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="institutions-tab" data-bs-toggle="tab" data-bs-target="#institutions" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>Institutions Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="teacher-tab" data-bs-toggle="tab" data-bs-target="#teacher" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>Teachers Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content mt-4" id="tabContent">
                                <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Accordion Item #1
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the first item's accordion body.</strong>
                                                            It is shown by
                                                                    default, until the collapse plugin adds the appropriate classes that we
                                                                    use to style each element. These classes control the overall appearance,
                                                                    as well as the showing and hiding via CSS transitions. You can modify
                                                                    any of this with custom CSS or overriding our default variables. It's
                                                                    also worth noting that just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Accordion Item #2
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the second item's accordion body.</strong>
                                                            It is hidden
                                                                    by default, until the collapse plugin adds the appropriate classes that
                                                                    we use to style each element. These classes control the overall
                                                                    appearance, as well as the showing and hiding via CSS transitions. You
                                                                    can modify any of this with custom CSS or overriding our default
                                                                    variables. It's also worth noting that just about any HTML can go within
                                                                    the
                                                            <code>.accordion-body</code>, though the transition does limit
                                                                        overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Accordion Item #3
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <strong>This is the third item's accordion body.</strong>
                                                            It is hidden
                                                                    by default, until the collapse plugin adds the appropriate classes that
                                                                    we use to style each element. These classes control the overall
                                                                    appearance, as well as the showing and hiding via CSS transitions. You
                                                                    can modify any of this with custom CSS or overriding our default
                                                                    variables. It's also worth noting that just about any HTML can go within
                                                                    the
                                                            <code>.accordion-body</code>, though the transition does limit
                                                                        overflow.
                                                        </div>
                                                    </div>
                                                </div>
                                            </>


                                            {/* <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingOne"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingTwo"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingThree"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingFour">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingFour"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div> */} </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="institutions" role="tabpanel" aria-labelledby="institutions-tab">
                                    <h1>One 2</h1>
                                    {/* <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion_inst" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading1">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse1" aria-expanded="true" aria-controls="collapse1"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse1" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading1"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading2">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse2" aria-expanded="true" aria-controls="collapse2"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse2" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading2"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading3">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse3" aria-expanded="true" aria-controls="collapse3"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse3" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading3"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading4">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse4" aria-expanded="true" aria-controls="collapse4"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse4" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading4"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */} </div>
                                <div className="tab-pane fade" id="teacher" role="tabpanel" aria-labelledby="teacher-tab">
                                    <h1>One 3</h1>
                                    {/* <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion_tech" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingi">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapsei" aria-expanded="true" aria-controls="collapsei"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapsei" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingi"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingii">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseii" aria-expanded="true" aria-controls="collapseii"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseii" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingii"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingiii">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseiii" aria-expanded="true" aria-controls="collapseiii"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseiii" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingiii"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingiv">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseiv" aria-expanded="true" aria-controls="collapseiv"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseiv" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingiv"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                                                                                                                                              life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className=""
            style={
                {
                    minHeight: "81vh",
                    backgroundColor: "#f5f5f5"
                }
        }>
            <div className="container py-5">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <div className="col-9">
                            <ul className="nav d-flex justify-content-center">
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>General Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="institutions-tab" data-bs-toggle="tab" data-bs-target="#institutions" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>Institutions Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item h-100"
                                    style={
                                        {minWidth: 280}
                                }>
                                    <a className="nav-link link-secondary" id="teacher-tab" data-bs-toggle="tab" data-bs-target="#teacher" href="#">
                                        <div className="card border-0 shadow-sm h-100 faq-card">
                                            <div className="p-3 text-center">
                                                <div>
                                                    <i className="fa-solid fa-clipboard-question fs-1 py-3"/>
                                                    <h6>Teachers Questions</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content mt-4" id="tabContent">
                                <div className="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingOne"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingTwo"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingThree"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingFour">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingFour"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="institutions" role="tabpanel" aria-labelledby="institutions-tab">
                                    <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion_inst" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading1">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse1" aria-expanded="true" aria-controls="collapse1"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse1" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading1"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading2">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse2" aria-expanded="true" aria-controls="collapse2"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse2" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading2"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading3">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse3" aria-expanded="true" aria-controls="collapse3"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse3" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading3"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="heading4">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_inst" href="#collapse4" aria-expanded="true" aria-controls="collapse4"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapse4" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="heading4"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="teacher" role="tabpanel" aria-labelledby="teacher-tab">
                                    <div className="card shadow-sm p-2">
                                        <div className="panel-group" id="accordion_tech" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingi">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapsei" aria-expanded="true" aria-controls="collapsei"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #1
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapsei" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingi"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingii">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseii" aria-expanded="true" aria-controls="collapseii"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #2
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseii" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingii"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingiii">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseiii" aria-expanded="true" aria-controls="collapseiii"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #3
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseiii" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingiii"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default card border p-2 mb-1"
                                                style={
                                                    {backgroundColor: "#f5f5f5"}
                                            }>
                                                <div className="panel-heading" role="tab" id="headingiv">
                                                    <h5 className="panel-title">
                                                        <a className="text-secondary fs-5" data-toggle="collapse" data-parent="#accordion_tech" href="#collapseiv" aria-expanded="true" aria-controls="collapseiv"
                                                            style={
                                                                {
                                                                    fontSize: "14px !important",
                                                                    color: "#2d9092 !important"
                                                                }
                                                        }>
                                                            Collapsible Group Item #4
                                                        </a>
                                                    </h5>
                                                </div>
                                                <div id="collapseiv" className="panel-collapse collapse border-top" role="tabpanel" aria-labelledby="headingiv"
                                                    style={
                                                        {backgroundColor: "#fff"}
                                                }>
                                                    <div className="panel-body"
                                                        style={
                                                            {fontSize: "12px !important"}
                                                    }>
                                                        <p className="px-2">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high
                                                                                      life accusamus terry richardson ad squid.le VHS.
                                                        </p>
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
        </section> */} </div>)
}
