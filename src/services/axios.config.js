import axios from "axios";

const URL = 'https://66f4a5f277b5e889709a119d.mockapi.io/api/stockProducts'

export const axiosInstance = axios.create({
    baseURL: URL
})