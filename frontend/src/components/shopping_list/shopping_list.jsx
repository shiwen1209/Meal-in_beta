import React from "react";
import { FaTachometerAlt } from 'react-icons/fa';


class ShoppingList extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            recipes: []
        };

        this.units = [
            '',          'tablespoon', 'tablespoons',
            'cup',       'cups',       'teaspoon',
            'teaspoons', 'cloves',     'pinch',
            'clove',     'pinches',    'pound',
            'pounds',    'heads',      'head',
            'stalks',    'stalk',      'slices',
            'slice',     'dash',       'ounce)',
            'sleeve',    'ounce',      'large',
            'small',     'medium'
        ];
    }

    componentDidMount()
    {
        console.log("bob", this.props);
        let array_of_recipeid = this.props.goodies.map((recipe_kinda) => recipe_kinda.recipe_id)
       this.props.getRecipesBreakdown(array_of_recipeid).then((res) => this.setState({recipes: res.data}));
       
    }

    checked(){
        return "checked"
    }

    render(){
        console.log("HUH?", this.state);
        let prelist = this.state.recipes.map((ele) => ele.ingredients);
        let lists = [].concat(...prelist);

        return (
            <div className="shopping-list">
                <div className="shopping-list-header">
                    <div className="print-container">
                        <div>print</div>
                        <i className="fa-solid fa-print"></i>
                    </div>

                    <div className="shoppinglist-title">My shopping list</div>

                </div>


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
                <div>
                    <button onClick={(e)=>this.props.closeModal()}>Save shoppinglist</button>
                </div>

            </div>
        )
    }
}

export default ShoppingList
