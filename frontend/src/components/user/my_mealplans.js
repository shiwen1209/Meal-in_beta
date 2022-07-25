import React from 'react';

class MyMealplans extends React.Component {

    componentDidMount(){
        debugger
        this.props.fetchUser(this.props.match.params.userId)
    }

    render() {
        return (
            <div>
                <div className='mealplan-recipes'>
                    <h1>List of user recipes</h1>
                </div>
                <div className='mealplan-main'>
                    <h1>MyMealplans</h1>
                </div>
            </div>
        );
    }
}

export default MyMealplans;