// axios  setup
import axios, { AxiosError, type AxiosInstance } from "axios";
import { VITE_API_URL } from "../config";
import { toast } from "react-toastify";

const apiHandler: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true,
});

apiHandler.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiHandler.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error("API Error:", error.message);
      if (axiosError.response && axiosError.response.status === 403) {
        toast.error("You have not permission to do that action.");
        throw new Error("Not allowed to that action..");
      }
      if (error.response) {
        toast.error(error.response.data.message)
        console.error("Status:", error.response.status);
      }
    } else {
      console.error("Unknown Error:", error);
    }
    return Promise.reject(error);
  }
);

export default apiHandler;
