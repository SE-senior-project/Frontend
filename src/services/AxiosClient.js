import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
});
export default apiClient;
