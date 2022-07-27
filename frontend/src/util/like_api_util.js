import axios from 'axios';

export const createLike = (like) => {
    return axios.post(`/api/likes?recipeId=${like.recipeId}&userId=${like.userId}`);
}

export const deleteLike = (like) => {
    return axios.delete(`/api/likes?recipeId=${like.recipeId}&userId=${like.userId}`);
}