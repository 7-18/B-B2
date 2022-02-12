import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="row row-cols-5 py-5 my-5 border-top">
          <div className="col col-12 col-md-3 col-lg-2">
            <a
              className="d-flex align-items-center text-decoration-none nav-logo"
              href="/"
            >
              myLorem
            </a>
            <button
              type="button"
              className="btn btn-primary btn-floating mx-1 footer-button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1 footer-button"
            >
              <i className="fab fa-instagram"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1 footer-button"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>
          <div className="col col-6 col-md-3 col-lg-1 p-3"></div>
          <div className="col col-12 col-md-6 col-lg-3">
            <h5>About Us</h5>
            <ul className="nav flex-column">
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Mission
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  History
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Staff
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Policies
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <h5>Our Work</h5>
            <ul className="nav flex-column">
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Resources
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Family Resources
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Donor Information
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Education Committee
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Athletics
                </a>
              </li>
            </ul>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <h5>Get Involved</h5>
            <ul className="nav flex-column">
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Events
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  News
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Carrers
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Community
                </a>
              </li>
              <li className="list-footer mb-2">
                <a href="/" className="link-footer p-0 text-muted">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center">© 2022 | All Rights Reserved</p>
      </footer>
    );
  }
}

export default Footer;
