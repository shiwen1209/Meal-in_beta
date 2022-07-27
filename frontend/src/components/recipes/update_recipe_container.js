import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateExp } from "../../actions/exp_actions";
import ExpForm from "./exp_form";

const mstp = (state) => {
  const exp1 = state.ui.modal.payload;
  return {
    errors: state.errors.experience,
    formType: "Edit",
    create_exp_type: exp1.expType,
    exp: {
      id: exp1.id,
      user_id: state.session.id,
      employment_type: exp1.employmentType,
      title: exp1.title,
      company_name: exp1.companyName,
      location: exp1.location,
      start_date: exp1.startDate,
      end_date: exp1.endDate,
      exp_type: exp1.expType,
    },
  };
};

const mdtp = (dispatch) => {
  return {
    processForm: (exp) => dispatch(updateExp(exp)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mstp, mdtp)(ExpForm);
