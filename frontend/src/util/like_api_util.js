import axios from 'axios';

export const createLike = (like) => {
    return axios.post('/api/likes', like);
}

export const deleteLike = (like) => {
    debugger
    return axios.delete('/api/likes', like);
}