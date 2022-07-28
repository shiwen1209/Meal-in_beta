import { connect } from "react-redux";
import ShoppingList from './shopping_list'
import { openModalPayload, closeModal } from "../../actions/modal_actions"
import { getRecipesBreakdown } from "../../util/recipe_api_util";

const mstp = (state, ownProps) => {
    console.log("????", ownProps);
    return {
        goodies: ownProps.payload.meals,
        getRecipesBreakdown: (info) => getRecipesBreakdown(info)
    };
}

const mdtp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
}

export default connect(mstp, mdtp)(ShoppingList)