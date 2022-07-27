import { connect } from "react-redux";
import UserShowPage from "./user_show_page";
import { fetchUser } from "../../actions/user_actions";
import { updateUser } from "../../actions/user_actions";
import {openModalPayload, closeModal} from "../../actions/modal_actions"


const mstp = ( state, ownProps) => {
    return {
      recipes_liked: state.entities.recipes.recipes_liked,
      recipes_created: state.entities.recipes.recipes_created,
      user: Object.values(state.entities.users)[0],
      currentUserId: state.session.user.id,
      // recipes2: state.entities.recipes
    };
}

const mdtp = (dispatch) => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      updateUser: (user) => dispatch(updateUser(user)),
      openModalPayload: (obj) => dispatch(openModalPayload(obj)),
      closeModal: () => dispatch(closeModal()),
    };
}

export default connect(mstp, mdtp)(UserShowPage)