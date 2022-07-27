import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'

const likeReducer = (state = {}, action) => {
    Object.freeze(state)

    let nextState = Object.assign({}, state);

    switch (action.type) {
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
export default likeReducer;