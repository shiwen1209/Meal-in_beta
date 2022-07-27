import {
    RECEIVE_ALL_RECIPES, RECEIVE_NEW_RECIPE, RECEIVE_NEW_RECIPES
} from '../actions/recipe_actions';

import { RECEIVE_USER } from '../actions/user_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            action.recipes.forEach((recipe)=>(
                nextState[recipe.id] = recipe
            ));
            return nextState;
        case RECEIVE_USER:
            nextState = {};
            nextState['recipes_liked'] = action.recipes_liked
            nextState['recipes_created'] = action.recipes_created
            return nextState;
        case RECEIVE_NEW_RECIPES:
            return action.recipes;
        case RECEIVE_NEW_RECIPE:
            return action.recipe;
        default:
            return state;
    }
}