import {CLOSE_MODAL, OPEN_MODAL_PAYLOAD } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return null;
        case OPEN_MODAL_PAYLOAD:
            return {modal: action.modal, payload: action.payload};
        default:
            return state;
    }
}

export default modalReducer;