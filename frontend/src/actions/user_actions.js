import * as UserApiUtil from '../util/user_api_util';
import { receiveNewRecipes } from './recipe_actions'

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (data) => {
    return {
        type: RECEIVE_USER,
        user: data.user,
        recipes: data.recipes_created
    }
};


export const fetchUser = (userId) => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then((payload) => dispatch(receiveUser(payload.data)))
);

export const fetchLikedRecipes = (userId) => dispatch => {
    UserApiUtil.fetchUser(userId).then(res => 
        {
            dispatch(receiveNewRecipes(res.data.recipes_liked))
        })
}

export const fetchCreatedRecipes = (userId) => dispatch => {
    UserApiUtil.fetchUser(userId).then(res => 
        {
            dispatch(receiveNewRecipes(res.data.recipes_created))
        })
}