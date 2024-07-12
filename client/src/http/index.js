import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// Endpoints

export const sendOtp = (data) => api.post("/api/send-otp", data);
export default api;
