import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-website-3-idg3.onrender.com/api",
});

export default API;