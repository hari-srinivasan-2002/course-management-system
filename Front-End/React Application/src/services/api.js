import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:9093"
});

export default API;