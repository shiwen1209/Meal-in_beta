import React from 'react';
import { Link } from 'react-router-dom'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);

    }
    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <header>
            <div className="logged-in-nav">
                <div>
                    <Link to={'/'} className="logo">
                        <h1>Meal'in</h1>
                    </Link>
                    <div className="recipe-link">
                        <Link to={'/recipes'}>Browse recipes</Link>
                    </div>
                    <div className="recipe-link">
                        <Link to={'/howitworks'}>How it works</Link>
                    </div>
                    <div className="recipe-link">
                        <Link to={'/about'}>About us</Link>
                    </div>
                    
                    {this.props.loggedIn ?
                        <div className="loggedin-links">
                            <div className="recipe-link">
                                <Link to={`/myprofile/${this.props.currentUserId}`}>My profile</Link>
                            </div>
                            <div className="recipe-link">
                                <Link to={`/mymealplans/${this.props.currentUserId}`}>Make a meal plan</Link>
                            </div>
                        </div> : <div></div>}
                </div>
                {this.props.loggedIn ?
                    <div className="login-signup">
                        <div className="nav-bar-login" onClick={this.logoutUser}>
                            <button >Logout</button>
                        </div>
                    </div> :
                    <div className="login-signup">
                        <div className="nav-bar-login">
                            <Link to={'/login'}>Login</Link>
                        </div>
                        <div className="nav-bar-login">
                            <Link to={'/signup'}>Sign up</Link>
                        </div>
                    </div>}
                    
            </div>
            </header>
        );
    }
}
export default NavBar;
