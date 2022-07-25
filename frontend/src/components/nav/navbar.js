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
                <div>
                    <Link to={'/'}>Browse Recipes</Link>
                    &nbsp; 
                    <Link to={`/myrecipes/${currentUserId}`}>My Recipes</Link>
                    &nbsp; 
                    <Link to={`/mymealplans/${currentUserId}`}>My Mealplans</Link>
                    &nbsp; 
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Meal'in</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;