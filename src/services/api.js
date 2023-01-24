import axios from "axios";

const api = axios.create({
  baseURL: "https://habits-service.onrender.com/",
});

export default api;
