import * as UserApiUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";

export const receiveUser = (data) => {
    return {
        type: RECEIVE_USER,
        user: data.user,
        recipes_liked: data.recipes_liked,
        recipes_created: data.recipes_created
    }
};

export const receiveUpdatedUser = (user) => {
  // console.log('aaaa', user)
  return {
    type: RECEIVE_UPDATED_USER,
    user: user,
  };
};


export const fetchUser = (userId) => dispatch => (
    UserApiUtil.fetchUser(userId)
        .then((payload) => dispatch(receiveUser(payload.data)))
);

export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user).then((newUser) =>
      dispatch(receiveUpdatedUser(newUser))
    );
};

