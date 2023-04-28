import axios from "axios";

const api = axios.create({
  baseURL: "https://habits-api-kappa.vercel.app/",
});

export default api;
