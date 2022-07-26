import { connect } from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import Recipe from './recipes'

const mSTP = (state, ownProps) => {
    // debugger
    return{
        recipe: state.entities.recipes[ownProps.match.params.recipeId]
}}

const mDTP = (dispatch) => ({
    fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
});

export default connect(mSTP, mDTP)(Recipe)