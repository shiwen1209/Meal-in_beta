import { connect } from 'react-redux';
import {fetchRecipe} from '../../actions/recipe_actions';
import { openModalPayload, closeModal } from "../../actions/modal_actions"
import Recipe from './recipes'

const mSTP = (state, ownProps) => {
    return{
        recipe: state.entities.currentRecipe,
        currentUser: state.session.user
}}

const mDTP = (dispatch) => ({
    fetchRecipe: (recipeId, userId) => dispatch(fetchRecipe(recipeId, userId)),
    openModalPayload: (modal_name, payload) => dispatch(openModalPayload(modal_name, payload)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Recipe)