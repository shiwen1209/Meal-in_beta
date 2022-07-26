import React from 'react';

class MyRecipes extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <h1>My Recipes</h1>
            </div>
        );
    }
}

export default MyRecipes;