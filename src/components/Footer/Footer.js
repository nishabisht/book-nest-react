import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBridge, faSign, faGift } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="card text-center bg-theme">
        {/* <div className="card-header">footer</div> */}
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active ">
                  <a className="nav-link text-white" href="#">
                    About <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">
                    FAQs <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
            <footer className="blockquote-footer">
              <div className="row text-white">
                <div className="col col-lg-4"></div>
                <div className="col col-lg-4">© 2022 Company, Inc</div>
                <div className="col col-lg-4 text-center">
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faBridge} />
                  </span>
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faSign} />
                  </span>
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faGift} />
                  </span>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default Footer;
