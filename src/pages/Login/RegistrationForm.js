import React from "react";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ApiService from "../../utils/Api";

const RegistrationForm = () => {
  const [signUpData, setSignUpData] = useState({
    id: "",
    username: "",
    emailId: "",
    password: "",
    conPassword: "",
    roles: [""],
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roles") {
      setSignUpData((prevData) => ({
        ...prevData,
        roles: [value],
      }));
    } else {
      setSignUpData((preData) => ({
        ...preData,
        [name]: value,
      }));
    }
  };

  const handleFormValidation = () => {
    let formErrors = {};
    if (!signUpData.username) formErrors.username = "Username is required";
    if (!signUpData.emailId) formErrors.emailId = "Email is required";
    if (!signUpData.password) formErrors.password = "Password is required";
    else if (signUpData.password !== signUpData.conPassword)
      formErrors.password = "Passwords do not match ";
    if (!signUpData.roles[0]) formErrors.roles = "Role selection is required";

    return formErrors;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const validateError = handleFormValidation();

    if (Object.keys(validateError).length === 0) {
      try {
        await ApiService.createUsers(signUpData);

        setSignUpData({
          id: "",
          username: "",
          emailId: "",
          password: "",
          conPassword: "",
          roles: [""],
        });
      } catch (error) {
        console.error("Registration error: ", error);
        setError({ general: "Registration failed, try again." });
      }
    } else {
      setError(validateError);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSignUpSubmit} id="signUp">
        <div className="form-group mb-1">
          <label>User Type</label>
          <select
            name="roles"
            value={signUpData.roles}
            onChange={handleChange}
            className="form-select mb-2"
          >
            <option value="" disabled>
              Select user type
            </option>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
          {error.roles && <div className="text-danger">{error.roles}</div>}
        </div>

        <div className="form-group mb-1">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={signUpData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="username"
          />
          {error.username && (
            <div className="text-danger">{error.username}</div>
          )}
        </div>

        <div className="form-group mb-1">
          <label>Email</label>
          <input
            type="email"
            name="emailId"
            value={signUpData.emailId}
            onChange={handleChange}
            className="form-control"
            placeholder="user.bisht223@gmail.com"
          />
          {error.emailId && <div className="text-danger">{error.emailId}</div>}
        </div>

        <div className="form-group mb-1">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Password"
          />
          {error.password && (
            <div className="text-danger">{error.password}</div>
          )}
        </div>

        <div className="form-group mb-1">
          <label>Confirm Password</label>
          <input
            type="password"
            name="conPassword"
            value={signUpData.conPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="password"
          />
        </div>

        <button type="submit" className="btn btn-outline-info my-2">
          <FontAwesomeIcon icon={faRegistered} />
          SignUp
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegistrationForm;
