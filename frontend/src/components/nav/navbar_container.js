import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => { 
    return {
    loggedIn: state.session.isAuthenticated,
    currentUserId: state.session.user.id
}};


const mapDispatchToProps = dispatch =>({
    logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);