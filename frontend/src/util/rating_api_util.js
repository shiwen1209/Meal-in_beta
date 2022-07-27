import axios from 'axios';

export const createRating = (rating) => {
    return axios.post('/api/ratings', rating);
}

export const updateRating = (rating) => {
    return axios.patch('/api/ratings', rating);
}