import { connect } from "react-redux"
import MyMealplans from "./my_mealplans";
import { fetchUser } from "../../actions/user_actions";
import { recipeSelector } from "../../actions/recipes_selector"

const mstp = (state, ownProps)=>{
    return{
        recipes: recipeSelector(state),
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=> dispatch(fetchUser(userId))
    }
}

export default connect(mstp, mdtp)(MyMealplans)