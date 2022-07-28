import { RECEIVE_MEALPLAN } from "../actions/meaplan_actions";

const nutrientReducer = (state = {}, action) => {
    Object.freeze(state)

    let nextState = Object.assign({}, state);

    switch (action.type) {
         case RECEIVE_MEALPLAN:
            return action.nutrients;
        default: 
            return state;
    }
}

export default nutrientReducer;
