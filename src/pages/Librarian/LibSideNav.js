import React from "react";
import "./lib.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faExchange } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const LibSideNav = () => {
  return (
    <>
      <div className="col col-lg-2" id="sideNav" style={{ height: "70vh" }}>
        <ul className="nav flex-column gap-4 mt-5 ms-3">
          <li className="nav-item ">
            <NavLink className="nav-link mx-3" to="/user_profile">
              <img
                className="profile"
                src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link text-white" to="/lib_dashboard">
              <span className="px-2">
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/user_profile">
              <span className="px-2">
                <FontAwesomeIcon icon={faPerson} />
              </span>
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/inventory">
              <span className="px-2">
                <FontAwesomeIcon icon={faExchange} />
              </span>
              Inventory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  text-white" to="/">
              <span className="px-2">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </span>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LibSideNav;
