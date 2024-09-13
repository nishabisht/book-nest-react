import React from "react";
import PublicNav from "../../pages/Navigation/PublicNav";
import UserPrivateNav from "../../pages/Navigation/UserPrivateNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSign, faSignOut } from "@fortawesome/free-solid-svg-icons";
import LibrarianPrivateNav from "../../pages/Navigation/LibrarianPrivateNav";

const Header = () => {
  const pubMenu = {
    home: "Home",
    about: "About",
    button1: { icon: <FontAwesomeIcon icon={faSign} />, text: "SignIn" },
    button2: { icon: <FontAwesomeIcon icon={faSignIn} />, text: "Login" },
  };

  const userMenu = {
    home: "Dashboard",
    about: "Operation",
    button1: { icon: <FontAwesomeIcon icon={faSign} />, text: "Share" },
    button2: { icon: <FontAwesomeIcon icon={faSignOut} />, text: "Logout" },
  };

  const libarianMenu = {
    home: "Admin profile",
    about: "BookStore",
    button1: { icon: <FontAwesomeIcon icon={faSign} />, text: "Share" },
    button2: { icon: <FontAwesomeIcon icon={faSignOut} />, text: "Logout" },
  };

  return (
    <React.Fragment>
      <div>
        <PublicNav menu={pubMenu} />
        {/* <UserPrivateNav menu={userMenu} /> */}
        {/* <LibrarianPrivateNav menu={libarianMenu} /> */}
      </div>
    </React.Fragment>
  );
};

export default Header;
