import React from "react";
import "./Nav.css";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate

const PublicNav = ({ menu }) => {
  const { home, about, button1, button2 } = menu;
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToLibarian = () => {
    navigate("/member_dashboard");
  };
  const navigateToMember = () => {
    navigate("/login");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border shadow">
        <div className="container-fluid">
          <NavLink className="d-flex navbar-brand ps-3" to="/book-nest-react">
            <img
              src={`${process.env.PUBLIC_URL}/logo512.png`}
              alt="logo"
              id="logo"
            />
          </NavLink>
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
              <li className="nav-item col">
                <NavLink className="nav-link active" to="/" aria-current="page">
                  // need to change path
                  {home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {about}
                </NavLink>
              </li>
              <li className="nav-item">
                <form className="d-flex">
                  <input
                    className="form-control mx-3"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn btn btn-outline-info shadow"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <ul className="d-flex justify-content-evenly">
              <li className="nav-item">
                <button
                  className="btn btn btn-outline-info shadow mx-2"
                  onClick={navigateToLibarian} // Navigate to login page
                >
                  <span className="mx-1">{button1.icon}</span>
                  {button1.text}
                </button>
                <button
                  className="btn btn btn-outline-info shadow mx-2"
                  onClick={navigateToMember} // Navigate to another route
                >
                  <span className="mx-1">{button2.icon}</span>
                  {button2.text}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PublicNav;
