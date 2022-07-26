import { combineReducers } from 'redux';
import session from './session_api_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import modalReducer from './modal_reducer';

const RootReducer = combineReducers({
    entities,
    session,
    errors,
    modal: modalReducer 
});

export default RootReducer;