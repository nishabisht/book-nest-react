import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

//Base configuration for axios
const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

//Adding a request interceptor to attach tokens or other info

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = "Bearer ${token}";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Adding a response interceptor to handle errors globally

API.interceptors.response.use(
  (response) => response,
  (error) => {
    //Handle errors globally
    console.error("API error: ", error);
    return Promise.reject(error);
  }
);

//User API methods
const ApiService = {
  //save User
  createUsers: (user) => API.post(`/auth/saveUser`, user),

  //Login user
  loginUser: (cred) => API.post(`/auth/login`, cred),

  //update user profile
  updateUser: (username, user) => API.put(`/ops/updateUser/${username}`, user),

  //get user By email
  getUserByEmail: (email) => API.get(`/ops/getUserByEmail/${email}`),

  //get user
  getUserByUserName: (username) => API.get(`/ops/getUser/${username}`),

  //get user by role
  getUserRoleByUserName: (username) =>
    API.get(`/ops/getRoleByUsername/${username}`),

  //delete user
  deleteUserByName: (username) => API.delete(`/ops/deleteUser/${username}`),
};

export default ApiService;
