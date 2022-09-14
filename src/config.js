import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backendbooking.herokuapp.com/api",
});
