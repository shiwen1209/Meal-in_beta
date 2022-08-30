import { connect } from "react-redux";
import UserShowPage from "./user_show_page";
import { fetchUser } from "../../actions/user_actions";
import { updateUser } from "../../actions/user_actions";
import {openModalPayload, closeModal} from "../../actions/modal_actions"


const mstp = ( state, ownProps) => {
    return {
      recipes_liked: state.entities.recipes.recipes_liked,
      recipes_created: state.entities.recipes.recipes_created,
      user: state.entities.users,
      currentUserId: state.session.user.id
    };
}

const mdtp = (dispatch) => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      updateUser: (user) => dispatch(updateUser(user)),
      openModalPayload: (modal_name) => dispatch(openModalPayload(modal_name)),
      closeModal: () => dispatch(closeModal()),
    };
}

export default connect(mstp, mdtp)(UserShowPage)