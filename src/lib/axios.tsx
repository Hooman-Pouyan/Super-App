import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.baseurl,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";
  axios.defaults.headers.post["Access-Control-Allow-Headers"] =
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version";

  const token = localStorage.getItem("AccessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
