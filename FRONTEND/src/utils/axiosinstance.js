import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// error handling response interceptor for each case like 400 401 403 404 500 using switch case
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 400:
          console.error("Bad Request:", response.data);
          break;
        case 401:
          console.error("Unauthorized:", response.data);
          break;
        case 403:
          console.error("Forbidden:", response.data);
          break;
        case 404:
          console.error("Not Found:", response.data);
          break;
        case 500:
          console.error("Internal Server Error:", response.data);
          break;
        default:
          console.error("An error occurred:", response.data);
      }
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;