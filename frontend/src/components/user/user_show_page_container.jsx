import { connect } from "react-redux";
import UserShowPage from "./user_show_page";
import { fetchUser, fetchLikedRecipes, fetchCreatedRecipes } from "../../actions/user_actions";


const mstp = ( state, ownProps) => {
    return {
      recipes_liked: state.entities.recipes.recipes_liked,
      recipes_created: state.entities.recipes.recipes_created,
      user: state.entities.users[ownProps.match.params.userId],
      // recipes2: state.entities.recipes
    };
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        // fetchLikedRecipes : (userId) => dispatch(fetchLikedRecipes(userId)),
        // fetchCreatedRecipes: (userId) => dispatch(fetchCreatedRecipes(userId))
    }
}

export default connect(mstp, mdtp)(UserShowPage)