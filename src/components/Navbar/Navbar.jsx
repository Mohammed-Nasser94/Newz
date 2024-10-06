import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 end-0 z-3 "
      data-bs-theme="dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="home">
          NEWZ
        </Link>
        <button
          className="navbar-toggler"
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
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link className="nav-link " aria-current="page" to="home">
                Home
              </Link>
            </li>
            <Link className="nav-link" to="apple">
              <i className="fa-brands fa-apple"></i> Apple
            </Link>
            <li className="nav-item">
              <Link className="nav-link" to="tesla">
                <i className="fa-solid fa-car"></i> Tesla
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link className="nav-link" to="usb">
                <i className="fa-solid fa-dollar-sign"></i>US Business
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="tech">
                <i className="fa-solid fa-computer"></i> TechCrunch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
