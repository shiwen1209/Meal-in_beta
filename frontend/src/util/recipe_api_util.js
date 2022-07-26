import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/recipes');
};

export const fetchRecipe = (id, userId) => {
    console.log("2")
    return axios.get(`/api/recipes/${id}/${userId}`);
};



