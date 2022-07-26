import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_NEW_RECIPES = "RECEIVE_NEW_RECIPES";

export const receiveAllRecipes = (recipes)=> {
    // debugger
    return {
        type: RECEIVE_ALL_RECIPES,
        recipes
}};

export const receiveRecipe = (recipe) => ({
    type: RECEIVE_RECIPE,
    recipe
})

export const receiveNewRecipes = (recipes) => ({
    type: RECEIVE_NEW_RECIPES,
    recipes
})

export const fetchRecipes = () => dispatch => (
    RecipeApiUtil.fetchRecipes()
    .then((payload)=> dispatch(receiveAllRecipes(payload.data)))
);

export const fetchRecipe = (recipeId) => dispatch => (
    RecipeApiUtil.fetchRecipe(recipeId)
        .then((recipe) => dispatch(receiveRecipe(recipe.data)))
);

