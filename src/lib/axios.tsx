import axios from "axios";
import { env } from "process";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL ?? "https://wadood-backend.liara.run/",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("AccessToken");
  config.headers.Accept = `Bearer ${token}`;
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";
  axios.defaults.headers.post["Access-Control-Allow-Headers"] =
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
