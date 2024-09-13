import React from "react";
import UserPrivateNav from "./UserPrivateNav";
import PublicNav from "./PublicNav";

const LibrarianPrivateNav = ({ menu }) => {
  return (
    <>
      <PublicNav menu={menu} />
    </>
  );
};

export default LibrarianPrivateNav;
