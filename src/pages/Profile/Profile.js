import React from "react";
import "./Profile.css"; // Import your CSS file for styling
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LibSideNav from "../Librarian/LibSideNav";
import { Member_sidebar } from "../Member/Member_sidebar";

const Profile = ({ user }) => {
  return (
    <>
      <Header />
      <div className="row">
        {user.role === "Member" ? <Member_sidebar /> : <LibSideNav />}
        <div className="col">
          <div className=" profile-container shadow" id="forms">
            <div className="profile-header">
              <img
                src={user.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
              <h1>{user.name}</h1>
            </div>
            <div className="profile-details">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>Bio:</strong> {user.bio}
              </p>
              {/* Add more fields as necessary */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
