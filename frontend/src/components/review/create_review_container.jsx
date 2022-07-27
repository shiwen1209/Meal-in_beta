import { connect } from "react-redux";
import CreateRatingForm from "./create_review"
import {createRating} from '../../actions/review_actions';
import { fetchRecipe } from '../../actions/recipe_actions';


const mSTP = (state, ownProps) => {
    return{
        review: state.entities.rating,
        total_rating: state.entities.currentRecipe.total_rating
    }
}

const mDTP = (dispatch) => {
    return {
        createRating: (rating) => dispatch(createRating(rating)),
        fetchRecipe: (recipeId, userId) => dispatch(fetchRecipe(recipeId, userId))
    }
}

export default connect(mSTP, mDTP)(CreateRatingForm);

