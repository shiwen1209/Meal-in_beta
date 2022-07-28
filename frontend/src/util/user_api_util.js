import axios from 'axios';

export const fetchUser = userId => {
    return axios.get(`/api/users/${userId}`);
}

export const updateUser = async (user) => {
    const response = await axios.patch(`/api/users/${user.id}`, user);
    return response.data;
}


