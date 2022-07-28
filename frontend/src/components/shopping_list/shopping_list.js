import React from "react";
import { connect } from "react-redux";
import { FaTachometerAlt } from 'react-icons/fa';


class ShoppingList extends React.Component{
    componentDidMount()
    {
        console.log("bob", this.props);
    }

    checked(){
        return "checked"
    }

    render(){
        let lists = ["500g potato", "30g salt", "100g rice", "20g pepper", "200ml oil" ]
        return (
            <div className="shopping-list">
                
                <div className="shoppinglist-title">{this.props.name}'s Shopping List</div>

                <div className="list-box">
                    {
                        lists.map(list => (
                            <div className="list">
                                <label className="container">
                                    <FaTachometerAlt className="shopplist-icon"/>{list}<input type="checkbox" onChange={this.checked} />
                                <span className="checkmark"></span>
                                </label>
                            </div>
                        ))
                    }

                </div>

            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return{
        goodies: ownProps.payload.meals,
        name: ownProps.payload.name
    }
}

const mdtp = (dispatch) => {
    return {
        
    }
}
export default connect(mstp, mdtp)(ShoppingList)
