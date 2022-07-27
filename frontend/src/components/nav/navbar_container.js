import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
    return {
    loggedIn: state.session.isAuthenticated,
    currentUserId: state.session.user.id
}};

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);