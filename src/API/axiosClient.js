import axios from "axios";

export const axiosClient = axios.create({
        baseURL: 'http://localhost:5093/api',
        headers: {
                'Content-Type': 'application/json',
        }
})

axiosClient.interceptors.response.use(
        function (response) {
                return response.data
        },
        function (erorr) {
                return Promise.reject(erorr)
        }
)