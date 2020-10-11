import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:4000/Users";

class UsersService {

    getUsers() {
        return axios.get(USER_API_BASE_URL + '/');
    }

    createUsers(user) {
        return axios.post(USER_API_BASE_URL + '/signup', user);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/view-user/' + userId);
    }

    updateUsers(user, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUsers(userId) {
        return axios.delete(USER_API_BASE_URL + '/delete/' + userId);

    }
}

export default new UsersService()