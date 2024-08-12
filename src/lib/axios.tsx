import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wadood-backend.liara.run/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("AccessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
