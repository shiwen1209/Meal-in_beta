import * as RecipeApiUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = "RECEIVE_ALL_RECIPES";

export const receiveAllRecipes = (recipes)=> {
    // debugger
    return {
        type: RECEIVE_ALL_RECIPES,
        recipes
}};

export const fetchRecipes = () => dispatch => (
    RecipeApiUtil.fetchRecipes()
    .then((payload)=> dispatch(receiveAllRecipes(payload.data)))
);

