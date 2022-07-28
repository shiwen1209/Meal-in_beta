import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateRecipe } from "../../actions/recipe_actions"
import { fetchRecipe } from "../../util/recipe_api_util";
// import { updateExp } from "../../actions/exp_actions";
// import ExpForm from "./exp_form";
import EditRecipeForm from "./edit_recipe_form";

const mstp = (state, ownProps) => {
  console.log(state, 'peepee')
  console.log(ownProps, "poopoo")
  
  return {
    formType: "Update",
    currentUserId: state.session.user._id,
    recipeId: ownProps.recipeId,
    fetchRecipe: (id) => fetchRecipe(id)
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (exp, recipeId) => dispatch(updateRecipe(exp, recipeId)),
    closeModal: () => dispatch(closeModal()),

  };
};

export default connect(mstp, mdtp)(EditRecipeForm);
