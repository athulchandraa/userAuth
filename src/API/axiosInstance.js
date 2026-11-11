import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://userauth-backend-fzn3.onrender.com/",
    timeout:10000
})

export default axiosInstance