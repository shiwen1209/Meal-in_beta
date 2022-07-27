import { connect } from "react-redux";
import UserEditForm from "./user_edit_form"
import {fetchUser, updateUser} from '../../actions/user_actions'


const mstp = (state) => {
    return{
        currentUser: state.session.user
    }
}

const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mstp, mdtp)(UserEditForm)