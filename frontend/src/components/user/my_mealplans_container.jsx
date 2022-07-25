import { connect } from "react-redux"
import MyMealplans from "./my_mealplans";

const mstp = (state)=>{
    return{
        // recipes: state.entities.recipes[state]
    }
}

const mdtp = (dispatch) => {
    return {
    }
}

export default connect(mstp, mdtp)(MyMealplans)