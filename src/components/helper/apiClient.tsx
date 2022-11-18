import axios from "axios";


const apiClient = () => {
    const { API_URL } = process.env; 

    const axiosInstance = axios.create({
        baseURL: API_URL,
        responseType: 'json',
    });

    return axiosInstance
};

export default apiClient;