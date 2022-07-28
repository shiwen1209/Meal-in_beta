import {
  RECEIVE_RECIPE
} from '../actions/recipe_actions';
import {RECEIVE_RATING, RECEIVE_UPDATE_RATING } from "../actions/review_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'


// import { RECEIVE_USER } from '../actions/user_actions';
 let current_recipe = function (state = {}, action) {
    Object.freeze(state);   
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RECIPE:
            // debugger
            return action.recipe
        case RECEIVE_RATING:
            // debugger
            nextState.num_ratings += 1;
            nextState.total_rating += action.rating.rating;
            nextState.user_rating = action.rating.rating;
            // nextState.user_liked = true;
            return nextState;
        case RECEIVE_UPDATE_RATING:
            // debugger
            nextState.total_rating += action.rating.data.rating;
            nextState.user_rating = action.rating.data.rating;
            return nextState;
        case RECEIVE_LIKE:
            nextState.num_likes += 1;
            nextState.user_liked = true;
            return nextState;
        case REMOVE_LIKE:
            debugger
            nextState.num_likes -= 1;
            nextState.user_liked = false;
            return nextState;
        default:
            return state;
    }
}

export default current_recipe