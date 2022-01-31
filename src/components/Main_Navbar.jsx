import React from "react";

export default function Main_Navbar() {
    return (
        <div className="main_nav">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    {/* <a className="nav_heading" href="#">Navbar</a> */}
                    <button
                        className="navbar-toggler toogler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse "
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav  mb-2 mb-lg-2 ">
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    About Us
                                </a>
                            </li>

                            <li className="nav-item  nav_content dropdown">
                                <a
                                    className=" active li_item dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="true"
                                >
                                    Departments
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Civil Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Mechanical Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Computer Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Electronics & Telecommunications Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Automobile Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Instrumentation & Control Engineering
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Applied Sciences
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Examination Section
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Office
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  nav_content dropdown">
                                <a
                                    className=" active li_item dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Admissions
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            FE
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            DSE
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Fee Structures
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Students
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className="active li_item" aria-current="page" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Research
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Alumni
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Campus Life
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Placements
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Faculty
                                </a>
                            </li>
                            <li className="nav-item  nav_content">
                                <a className=" active li_item" aria-current="page" href="#">
                                    Infrastructure
                                </a>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}
