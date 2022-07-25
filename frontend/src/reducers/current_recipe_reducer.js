import {
  RECEIVE_RECIPE
} from '../actions/recipe_actions';

// import { RECEIVE_USER } from '../actions/user_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_RECIPE:
            return action.recipe;
        default:
            return state;
    }
}