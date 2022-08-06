import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://blusoso-tiktok-clone-backend.herokuapp.com/",
});

export default axiosConfig;
