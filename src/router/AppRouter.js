import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/UserLogin";
import About from "../pages/About/About";
import Lib_dashboard from "../pages/Librarian/Lib_dashboard";
import Member_dashboard from "../pages/Member/Member_dashboard";
import Return_Borrow from "../pages/Member/Return_Borrow";
import InvalidPage from "../pages/InvalidPage/InvalidPage";
import Profile from "../pages/Profile/Profile";
import sampleUser from "../pages/Profile/SampleUser";
import Inventory from "../pages/Librarian/Inventory";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* {public navigation Link} */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* {common private navigation link} */}
        <Route path="/user_profile" element={<Profile user={sampleUser} />} />

        {/* Lib navigation link */}
        <Route path="/lib_dashboard" element={<Lib_dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>

        {/* {Member navigation link} */}
        <Route path="/borrow_return" element={<Return_Borrow />}></Route>
        <Route path="/member_dashboard" element={<Member_dashboard />}></Route>

        {/* {invalid page navigation link} */}
        <Route path="*" element={<InvalidPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
