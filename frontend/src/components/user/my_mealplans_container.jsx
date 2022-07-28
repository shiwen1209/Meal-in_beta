import { connect } from "react-redux"
import MyMealplans from "./my_mealplans";
import { fetchUser } from "../../actions/user_actions";
import { recipeSelector } from "../../actions/recipes_selector";
import { createMealplan } from "../../actions/meaplan_actions";

const mstp = (state, ownProps) => {
    return{
        recipes: recipeSelector(state),
        user: state.entities.users[ownProps.match.params.userId],
        currentUserId: state.session.user._id
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=> dispatch(fetchUser(userId)),
        createMealplan: (mealplan) => dispatch(createMealplan(mealplan))
    }
}
export default connect(mstp, mdtp)(MyMealplans)
