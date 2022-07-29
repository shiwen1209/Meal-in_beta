import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const RECEIVE_NEW_RECIPES = "RECEIVE_NEW_RECIPES";
export const RECEIVE_NEW_RECIPE = "RECEIVE_NEW_RECIPE";
export const RECEIVE_UPDATED_RECIPE = "RECEIVE_UPDATED_RECIPE";


export const receiveAllRecipes = (recipes)=> {
    return {
        type: RECEIVE_ALL_RECIPES,
        recipes
}};

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const removeRecipe = (recipe) => {
    return {
    type: REMOVE_RECIPE,
    recipe
}}

export const receiveUpdatedRecipe = (data) => {
    // console.log(data, 'data')
    return {
        type: RECEIVE_UPDATED_RECIPE,
        recipe: data
    }
}

export const receiveNewRecipes = (recipes) => ({
    type: RECEIVE_NEW_RECIPES,
    recipes
})

export const receiveNewRecipe = recipe => ({
    type: RECEIVE_NEW_RECIPE,
    recipe
})



export const fetchRecipes = () => dispatch => (
    RecipeApiUtil.fetchRecipes()
    .then((payload)=> dispatch(receiveAllRecipes(payload.data)))
);

export const fetchRecipe = (recipeId, userId) => dispatch => (
    RecipeApiUtil.fetchRecipe(recipeId, userId)
        .then((recipe) => dispatch(receiveRecipe(recipe.data)))
);

export const createRecipe = data => dispatch => {
    RecipeApiUtil.createRecipe(data)
        .then((recipe) => dispatch(receiveNewRecipe(recipe.data)))
}

export const updateRecipe = (recipe, recipeId) => dispatch => {
    return RecipeApiUtil.updateRecipe(recipe, recipeId).then((payload) =>
    dispatch(receiveUpdatedRecipe(payload.data))
    )
}

export const deleteRecipe = (recipeId) => dispatch => {
    return RecipeApiUtil.deleteRecipe(recipeId).then(
        (payload) =>{
            return dispatch(removeRecipe(payload.data))

        }
        
    )
}

