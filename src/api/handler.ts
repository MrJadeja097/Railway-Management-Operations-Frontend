// axios  setup
// src/api/handler.ts

import axios, { type AxiosInstance } from "axios";
import { VITE_API_URL } from "../config";


const apiHandler: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // if you need cookies/CSRF
});

// 🚦 Request Interceptor
apiHandler.interceptors.request.use(
  (config) => {
    // Example: Attach auth token dynamically if available
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor
apiHandler.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      // Handle known Axios error shape
      console.error("API Error:", error.message);
      if (error.response) {
        console.error("Status:", error.response.status);
      }
    } else {
      console.error("Unknown Error:", error);
    }
    return Promise.reject(error);
  }
);

export default apiHandler;
