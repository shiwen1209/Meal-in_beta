import { RECEIVE_RATING } from "../actions/review_actions";

const ratingReducer = (state = {}, action) => {
    Object.freeze(state)

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_RATING:
            return action.rating;
        default: 
            return state;
    }
}

export default ratingReducer;