import { combineReducers } from 'redux';

import RecipesReducer from './recipes_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    recipes: RecipesReducer,
    users: usersReducer,
    // currentReciper: currentRecipeReducer
});