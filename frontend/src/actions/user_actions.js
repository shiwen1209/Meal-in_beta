import * as UserApiUtil from '../util/user_api_util';

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