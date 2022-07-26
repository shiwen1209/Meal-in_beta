import { connect } from "react-redux";
import MyRecipes from "./my_recipes";
import { fetchUser } from "../../actions/user_actions";

const mstp = (state, ownProps)=>{
    return{
        recipes: state.entities.recipes,
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mstp, mdtp)(MyRecipes)