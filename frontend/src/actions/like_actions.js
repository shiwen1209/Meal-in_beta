import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = (recipeId) => ({
    type: REMOVE_LIKE,
    recipeId
});

export const createLike = (like) => dispatch => {
    return (
        LikeApiUtil.createLike(like)
            .then((payload) => dispatch(receiveLike(payload.data)))
    )
};

export const deleteLike = (recipeId) => dispatch => (
    LikeApiUtil.deleteLike(recipeId)
        .then((payload) => dispatch(removeLike(payload.data)))
)
