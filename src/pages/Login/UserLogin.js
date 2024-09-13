import React, { useState, useEffect } from "react";
import "./Login.css";
// import formImage from ""; // Use the symlink to import images
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ApiService from "../../utils/Api";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const UserLogin = () => {
  //all state variable
  const [formType, setFormType] = useState({
    signUp: false,
    signIn: true,
    heading: "SignUp",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const [signInData, setSignInData] = useState({
    userType: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});

  //custom label for admin / member
  const getLabel = (field) =>
    selectedOption === "admin" ? adminLogin[field] : memberLogin[field];

  //handle change on sign in
  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //take affect on sign up data
  // useEffect(() => {
  //   setSelectedOption(signUpData.userType);
  // }, [signUpData]);

  // //form field validation
  // const handleFormValidation = (signIn) => {
  //   let formErrors = {};
  //   if (signIn) {
  //     if (!signInData.userType)
  //       formErrors.userType = "user type is required field";
  //     if (!signInData.username)
  //       formErrors.username = "user name is required field";
  //     if (!signInData.password)
  //       formErrors.password = "Password is required field";
  //   } else {
  //     if (!signUpData.userType)
  //       formErrors.userType = "user type is required field";
  //     if (!signUpData.username)
  //       formErrors.username = "user name is required field";
  //     if (!signUpData.emailId)
  //       formErrors.email = "user email is required field";
  //     if (!signUpData.password) {
  //       formErrors.password = "Password is required field";
  //     } else if (signUpData.password !== signUpData.conPassword) {
  //       formErrors.password = "password and confirm password do not match";
  //     }
  //   }
  //   return formErrors;
  // };

  // //new registered users data
  // const handleSignUpSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationError = handleFormValidation(false);

  //   if (Object.keys(validationError).length === 0) {
  //     // setNewRegisterUser((prevUsers) => [...prevUsers, signUpData]);
  //     try {
  //       await ApiService.createUsers(signUpData);
  //       //clear form data
  //       setSignUpData({
  //         id: "",
  //         username: "",
  //         emailId: "",
  //         password: "",
  //         roles: [""],
  //       });
  //       //clear error data
  //       setError({});
  //     } catch (error) {
  //       console.error("Registration error: ", error);
  //       setError({ general: "Registration failed try again." });
  //     }
  //   } else {
  //     setError(validationError);
  //   }
  // };

  //navigate to libarian dashboard
  const navigateToLibraian = () => {
    console.log("Login sucessful admin");
    navigate("/lib_dashboard");
  };

  //navigate to member dashboard
  const navigateToMember = () => {
    console.log("Login sucessful member");
    navigate("/member_dashboard");
  };

  // //Login validation logic
  // const validateLogin = () => {
  //   const user = registerUser.find(
  //     (u) =>
  //       u.userType === signInData.roles &&
  //       u.username === signInData.username &&
  //       u.password === signInData.password
  //   );
  //   return user;
  // };

  //submit form for sign in
  // const handleSignInSubmit = async (e) => {
  //   e.preventDefault(); // Prevents default form submission
  //   //const validationError = handleFormValidation(true); // Validate form data for sign-in

  //   if (Object.keys(validationError).length === 0) {
  //     try {
  //       const response = await ApiService.loginUser({
  //         username: signInData.username,
  //         password: signInData.password,
  //       });
  //       const user = validateLogin(); // Validate user login

  //       if (user) {
  //         localStorage.setItem("authToken", user.token);
  //         if (user.userType === "admin") {
  //           navigateToLibraian();
  //         } else if (user.userType === "member") {
  //           navigateToMember();
  //         } else {
  //           setError({ general: "invalid userType" });
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Login error: ", error);
  //       setError({ general: "Invalid credentials. Please try again." });
  //     }
  //   } else {
  //     setError(validationError); // Set validation errors if any
  //   }
  // };

  //admin and member login label object
  const adminLogin = {
    email: "Admin email Id",
    password: "Admin password",
  };

  const memberLogin = {
    email: "Member email Id",
    password: "Member password",
  };

  //handle user type in sign in and sign up form
  const onHandleClick = (option) => {
    if (option === "signIn") {
      setFormType({
        signUp: false,
        signIn: true,
        heading: "SignIn",
      });
    } else if (option === "signUp") {
      setFormType({
        signUp: true,
        signIn: false,
        heading: "SignUp",
      });
    }
  };

  return (
    <>
      <Header style={{ width: "100%", height: "10%" }} />
      <div className="container-fuild">
        <div className="row" style={{ width: "100%", height: "60%" }}>
          <div className="col col-lg-6 ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/form.jpg`}
              className="img-fluid"
              alt="form"
            />
          </div>
          <div
            className="col col-lg-6 d-flex flex-column px-5 rounded text-white"
            id="forms"
          >
            <div className="row py-3">
              <div className="col">
                <button
                  className="btn btn btn-outline-info shadow"
                  type="submit"
                  onClick={() => onHandleClick("signIn")}
                >
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faSignIn} />
                  </span>
                  SignIn
                </button>
                <button
                  className="btn btn btn-outline-info mx-2 shadow"
                  type="submit"
                  onClick={() => onHandleClick("signUp")}
                >
                  <span className="mx-1">
                    <FontAwesomeIcon icon={faRegistered} />
                  </span>
                  SignUp
                </button>
              </div>
            </div>

            <h5 className="text-center">{formType.heading}</h5>

            {/* {formType.signIn && (
              <form className="m-3" onSubmit={handleSignInSubmit} id="signIn">
                <div className="form-group mb-1">
                  <label className="form-check-label my-1" htmlFor="options">
                    User Type
                  </label>
                  <select
                    id="options"
                    name="userType"
                    value={signInData.userType}
                    onChange={handleChangeSignIn}
                    className="form-select mb-2 shadow"
                    aria-label="Default select example"
                  >
                    <option value="" disabled defaultValue>
                      Open this select menu
                    </option>
                    <option value="member">Member</option>
                    <option value="admin">Admin</option>
                  </select>
                  {error.userType && (
                    <div className="text-danger">{error.userType}</div>
                  )}
                </div>

                <div className="form-group mb-1">
                  <label htmlFor="user-name">
                    Username <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control shadow "
                    name="username"
                    value={signInData.username}
                    onChange={handleChangeSignIn}
                    id="user-name"
                    placeholder="user_name"
                  />
                  {error.username && (
                    <div className="text-danger">{error.username}</div>
                  )}
                </div>

                <div className="form-group mb-1">
                  <label htmlFor="password">
                    {getLabel("password")}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control shadow"
                    id="password"
                    name="password"
                    value={signInData.password}
                    onChange={handleChangeSignIn}
                    placeholder="Password"
                  />
                  {error.password && (
                    <div className="text-danger">{error.password} </div>
                  )}
                </div>

                <button
                  className="btn btn-outline-info shadow my-2"
                  type="submit"
                >
                  <span className="text-center">SignIn</span>
                </button>
              </form>
            )} */}

            {formType.signUp && <RegistrationForm />}
          </div>
        </div>
      </div>
      <Footer style={{ width: "100%", height: "10%" }} />
    </>
  );
};

export default UserLogin;
