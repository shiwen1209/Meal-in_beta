import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createRecipe} from "../../actions/recipe_actions"

import RecipeForm from "./recipe_form";

const mstp = (state) => {
  return {
    formType: "Create",
    currentUserId: state.session.user.id
    };
};

const mdtp = (dispatch) => {
  return {
    processForm: (exp) => dispatch(createRecipe(exp)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(RecipeForm);
