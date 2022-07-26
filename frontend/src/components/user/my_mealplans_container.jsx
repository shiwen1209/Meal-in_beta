import { connect } from "react-redux"
import MyMealplans from "./my_mealplans";
import { fetchUser } from "../../actions/user_actions";

const mstp = (state, ownProps)=>{
    return{
        recipes: Object.values(state.entities.recipes),
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId)=> dispatch(fetchUser(userId))
    }
}

export default connect(mstp, mdtp)(MyMealplans)