import { connect } from "react-redux";
import ShoppingList from './shopping_list'
import { openModalPayload, closeModal } from "../../actions/modal_actions"


const mstp = (state, ownProps) => {
    return {
        
    };
}

const mdtp = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
}

export default connect(mstp, mdtp)(ShoppingList)