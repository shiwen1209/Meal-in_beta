import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/recipes');
};

export const fetchRecipe = (recipeId) => {
    return axios.get(`/api/recipes/${recipeId}`);
};
