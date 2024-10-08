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

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
