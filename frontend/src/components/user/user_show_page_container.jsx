import { connect } from "react-redux";
import UserShowPage from "./user_show_page";
import { fetchUser, fetchLikedRecipes, fetchCreatedRecipes } from "../../actions/user_actions";


const mstp = ( state, ownProps) => {
    return {
        recipes: Object.values(state.entities.recipes),
        user: state.entities.users[ownProps.match.params.userId],
        // recipes2: state.entities.recipes
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchLikedRecipes : (userId) => dispatch(fetchLikedRecipes(userId)),
        fetchCreatedRecipes: (userId) => dispatch(fetchCreatedRecipes(userId))
    }
}

export default connect(mstp, mdtp)(UserShowPage)