import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateRecipe } from "../../actions/recipe_actions"
// import { updateExp } from "../../actions/exp_actions";
// import ExpForm from "./exp_form";
import EditRecipeForm from "./edit_recipe_form";

const mstp = (state) => {
  return {
    formType: "Update",
    currentUserId: state.session.user.id
    // recipeId: Object.values(state.entit)
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (exp) => dispatch(updateRecipe(exp)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(EditRecipeForm);
