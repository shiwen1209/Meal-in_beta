import {
    RECEIVE_ALL_RECIPES, RECEIVE_RECIPE
} from '../actions/recipe_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            action.recipes.forEach((recipe)=>(
                nextState[recipe.id] = recipe
            ));
            return nextState;
        case RECEIVE_RECIPE:
            nextState[action.recipe.id] = action.recipe
            return nextState;
        default:
            return state;
    }
}