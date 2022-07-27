import axios from 'axios';

export const createLike = (like) => {
    return axios.post('/api/likes', like);
}

export const deleteLike = (recipeId) => {
    return axios.delete('/api/likes', recipeId);
}