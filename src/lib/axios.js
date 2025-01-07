import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-calculadora-ic.rdev.com.mx/v/1.0.0/compound-interest'
});

export default api;