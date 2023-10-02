import React from "react";
import logo from "../static/logo.png";
export default function navBar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "black" , border:'none'}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img
              src={logo}
              alt="Logo"
              width="60"
              height="60"
              className="justify-content-center"
            />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                 Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
