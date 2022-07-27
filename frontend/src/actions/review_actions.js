import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_ALL_RATINGS = "RECEIVE_ALL_RATINGS";
export const RECEIVE_RATING = "RECEIVE_RATING";

export const receiveRating = (rating) => ({
    type: RECEIVE_RATING,
    rating
});

export const createRating = (rating) => dispatch => {
    return (
        RatingApiUtil.createRating(rating)
            .then((payload) => dispatch(receiveRating(payload.data)))
    )
}

export const updateRating = (rating) => dispatch => (
    RatingApiUtil.updateRating(rating)
        .then((rating) => dispatch(receiveRating(rating)))
)


