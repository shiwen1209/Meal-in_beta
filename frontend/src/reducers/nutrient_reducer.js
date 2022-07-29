import { RECEIVE_MEALPLAN, REMOVE_MEALPLAN } from "../actions/meaplan_actions";

const nutrientReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
         case RECEIVE_MEALPLAN:
            return action.nutrients;
        case REMOVE_MEALPLAN:
            return {};
        default: 
            return state;
    }
}

export default nutrientReducer;
