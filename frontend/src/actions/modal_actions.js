export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL_PAYLOAD = "OPEN_MODAL_PAYLOAD";


export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const openModalPayload = ({ modal, payload = null }) => {
    // debugger
    return {
        type: OPEN_MODAL_PAYLOAD,
        modal: modal,
        payload: payload
    }
}