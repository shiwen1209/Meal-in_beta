import { connect } from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import Recipe from './recipes'

const mSTP = (state, ownProps) => {
    // debugger
    return{
        recipe: state.entities.currentRecipe,
        currentUser: state.session.user
}}

const mDTP = (dispatch) => ({
    fetchRecipe: (recipeId, userId) => dispatch(fetchRecipe(recipeId, userId)),
});

export default connect(mSTP, mDTP)(Recipe)