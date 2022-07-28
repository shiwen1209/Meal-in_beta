import {
    RECEIVE_ALL_RECIPES, RECEIVE_NEW_RECIPE, RECEIVE_NEW_RECIPES, RECEIVE_UPDATED_RECIPE
} from '../actions/recipe_actions';
// import { RECEIVE_RATING } from '../actions/review_actions';

import { RECEIVE_USER } from '../actions/user_actions';

const recipesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_ALL_RECIPES:
            nextState = Object.assign({}, state)
            action.recipes.forEach((recipe)=>(
                nextState[recipe.id] = recipe
            ));
            return nextState;
        case RECEIVE_USER:
            nextState = {};
            nextState['recipes_liked'] = action.recipes_liked
            nextState['recipes_created'] = action.recipes_created
            return nextState;
        case RECEIVE_NEW_RECIPES:
            return action.recipes;
        case RECEIVE_NEW_RECIPE:
            nextState = {recipes_created: structuredClone(state.recipes_created),
                recipes_liked: structuredClone(state.recipes_liked)
            }
            nextState.recipes_created.push(action.recipe);
            return nextState;
        case RECEIVE_UPDATED_RECIPE:
            nextState = {recipes_created: structuredClone(state.recipes_created),
                recipes_liked: structuredClone(state.recipes_liked)
            }
            for(let i = 0; i < nextState.recipes_created.length; i++){
                console.log('peee', nextState.recipes_created[i], 'pooooooo', action.recipe)
                if(nextState.recipes_created[i].id === action.recipe.id){
                    nextState.recipes_created[i] = action.recipe
                    break;
                }
            }
            return nextState;
        default:
            return state;
    }
}

export default recipesReducer;