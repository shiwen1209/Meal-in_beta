import { connect } from "react-redux";
import CreateRatingForm from './create_review';
import {createRating} from '../../actions/review_actions';
import { fetchRecipe } from '../../actions/recipe_actions';


const mSTP = (state, ownProps) => {
    console.log(state, "mystate");
    console.log(state.session.user)
    return{
        // currentUser: state.session.user,
        review: state.entities.rating,
        // recipeId: state.entities.currentRecipe,

    }
}

const mDTP = (dispatch) => {
    return {
        createRating: (rating) => dispatch(createRating(rating)),
        fetchRecipe: (recipeId, userId) => dispatch(fetchRecipe(recipeId, userId))
    }
}

export default connect(mSTP, mDTP)(CreateRatingForm);

