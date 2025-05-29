import axios from "axios";

export const BASE_URL = "http://localhost:8081/";

export const myAxios = axios.create({
  baseURL: BASE_URL
});

// myAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // Or use sessionStorage or a secure context
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
