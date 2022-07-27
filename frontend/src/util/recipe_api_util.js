import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/recipes');
};

export const fetchRecipe = (id, userId) => {
    if (userId === undefined){
        return axios.get(`/api/recipes/${id}`);
    }
    return axios.get(`/api/recipes/${id}/${userId}`);
};


export const createRecipe = data => {
  
    return axios.post(`/api/recipes/`, data );
};


