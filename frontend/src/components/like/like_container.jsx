import { connect } from "react-redux";
import Like from "./like"
import { createLike, deleteLike} from "../../actions/like_actions"
import { fetchRecipe } from '../../actions/recipe_actions';


const mSTP = (state, ownProps) => {
    return {
        currentRecipe: state.entities.currentRecipe
        // review: state.entities.rating,
        // total_rating: state.entities.currentRecipe.total_rating
    }
}

const mDTP = (dispatch) => {
    return {
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (dislike) => dispatch(deleteLike(dislike)),
        fetchRecipe: (recipeId, userId) => dispatch(fetchRecipe(recipeId, userId))
    }
}

export default connect(mSTP, mDTP)(Like);