import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/recipes');
};

export const fetchRecipe = (id) => {
    return axios.get(`/api/recipes/${id}`);
};
