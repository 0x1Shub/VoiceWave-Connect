import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("/api/send-otp", data);
export default api;
