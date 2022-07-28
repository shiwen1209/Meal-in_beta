import * as APIUtil from "../util/search_api_util"

import { receiveNewRecipes } from "./recipe_actions"


export const searchRecipes = (filters) => dispatch => (
    APIUtil.searchRecipes(filters)
        .then((recipes) => {
            dispatch(receiveNewRecipes(recipes.data))
        })
);