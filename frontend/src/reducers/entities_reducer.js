import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';
import usersReducer from './users_reducer';
import currentRecipeReducer from './current_recipe_reducer';
import ratingReducer from './rating_reducer';

export default combineReducers({
    recipes: RecipesReducer,
    users: usersReducer,
    currentRecipe: currentRecipeReducer,
    rating: ratingReducer
});