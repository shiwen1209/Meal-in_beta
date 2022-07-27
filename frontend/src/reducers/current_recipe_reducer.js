import {
  RECEIVE_RECIPE
} from '../actions/recipe_actions';
import {RECEIVE_RATING } from "../actions/review_actions";

// import { RECEIVE_USER } from '../actions/user_actions';
 let current_recipe = function (state = {}, action) {
    Object.freeze(state);   
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RECIPE:
            // debugger
            return action.recipe
        case RECEIVE_RATING:
            nextState.num_ratings += 1;
            nextState.total_rating += action.rating;
            return nextState;
        default:
            return state;
    }
}

export default current_recipe