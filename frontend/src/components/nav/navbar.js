import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        const {loggedIn, currentUserId} = this.props
        if (loggedIn) {
            return (
                <div className="logged-in-nav">
                    <div>
                        <Link to={'/'} className="logo">
                            <h1>Meal'in</h1>
                        </Link>
                        <div className="recipe-link">
                            <Link to={'/recipes'}>Browse Recipes</Link>
                        </div>
                        <div className="recipe-link">
                            <Link to={'/howitworks'}>How it works</Link>
                        </div>
                        <div className="recipe-link">
                            <Link to={`/myrecipes/${currentUserId}`}>My Recipes</Link>
                        </div>
                        <div className="recipe-link">
                            <Link to={`/mymealplans/${currentUserId}`}>My Mealplans</Link>
                        </div> 
                    </div>
                    <div className="login-signup">
                        <div className="nav-bar-login">
                            <button onClick={this.logoutUser}>Logout</button>
                        </div> 
                    </div>
                </div>
            );
        } else {
            return (
                <div className="logged-in-nav">
                    <div>
                        <Link to={'/'} className="logo">
                            <h1>Meal'in</h1>
                        </Link>
                        <div className="recipe-link">
                            <Link to={'/recipes'}>Browse Recipes</Link>
                        </div>
                        <div className="recipe-link">
                            <Link to={'/recipes'}>How it works</Link>
                        </div>
                    </div>

                    <div className="login-signup">
                        <div className="nav-bar-login">
                            <Link to={'/login'}>Login</Link>
                        </div>
                        <div className="nav-bar-login">
                            <Link to={'/signup'}>Sign up</Link>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;