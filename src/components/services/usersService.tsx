import apiClient from "../helper/apiClient";

class UsersService {
    getAllUsers = () => apiClient().get("users");
}

export default new UsersService();