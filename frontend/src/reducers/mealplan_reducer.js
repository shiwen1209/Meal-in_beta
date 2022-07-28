import { RECEIVE_MEALPLAN } from "../actions/meaplan_actions";

const mealplanReducer = (state = {}, action) => {
    Object.freeze(state)

    let nextState = Object.assign({}, state);

    switch (action.type) {
        //ALEC COMMENT THIS BACK IN
        // case RECEIVE_MEALPLAN:
        //     nextState[action.mealplan._id] = action.mealplan
        //     return nextState;
        default: 
            return state;
    }
}

export default mealplanReducer;