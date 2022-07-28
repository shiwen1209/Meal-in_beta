import axios from 'axios';

export const fetchRecipes = () => {
    // debugger
    return axios.get('/api/mainpage');
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


export const updateRecipe = (recipe, recipeId) => {
    console.log(recipe, 'lolo')
    return axios.patch(`/api/recipes/${recipeId}`, recipe )
}

