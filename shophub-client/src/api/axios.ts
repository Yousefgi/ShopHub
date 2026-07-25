import axios from "axios";
import { useAuthStore } from "../features/auth/store/auth.store";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// ==========================
// Request Interceptor
// ==========================

api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);


// ==========================
// Response Interceptor
// ==========================

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {

    if (error.response?.status === 401) {

      const logout = useAuthStore.getState().logout;

      logout();

      window.location.href = "/login";
    }


    return Promise.reject(error);
  }
);