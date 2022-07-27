import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
// import { createExp } from "../../actions/exp_actions";
import RecipeForm from "./recipe_form";

const mstp = (state) => {
  return {
    formType: "Create",
    recipe: {
    },
  };
};

const mdtp = (dispatch) => {
  return {
    // processForm: (exp) => dispatch(createRecipe(exp)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(RecipeForm);
