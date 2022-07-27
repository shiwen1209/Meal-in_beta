import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
// import { updateExp } from "../../actions/exp_actions";
// import ExpForm from "./exp_form";
import EditRecipeForm from "./edit_recipe_form";

const mstp = (state) => {
  return {
    formType: "Update",
    currentUserId: state.session.user.id
  };
};

const mdtp = (dispatch) => {
  return {
    // processForm: (exp) => dispatch(updateExp(exp)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(EditRecipeForm);
