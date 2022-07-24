import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/recipes');
};
