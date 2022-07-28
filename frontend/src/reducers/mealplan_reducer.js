import { RECEIVE_MEALPLAN, REMOVE_MEALPLAN } from "../actions/meaplan_actions";

const mealplanReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
         case RECEIVE_MEALPLAN:
            return action.mealplan;
        case REMOVE_MEALPLAN:
            return {};
        default: 
            return state;
    }
}

export default mealplanReducer;
