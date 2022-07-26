import {
    RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, RECEIVE_NEW_RECIPES
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
        // case RECEIVE_RECIPE:
        //     nextState[action.recipe.id] = action.recipe
        //     return nextState;
        case RECEIVE_USER:
            debugger
              nextState = {};
              nextState["recipes_liked"] = action.recipes_liked;
              nextState["recipes_created"] = action.recipes_created;
            debugger
            return nextState;
        case RECEIVE_NEW_RECIPES:
            return action.recipes
        default:
            return state;
    }
}