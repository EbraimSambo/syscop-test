import axios from "axios";



export const confiAxios = axios.create({
    baseURL: "http://localhost:4000/"
})