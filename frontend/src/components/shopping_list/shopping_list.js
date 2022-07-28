import React from "react";
import { connect } from "react-redux";
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
        // let postlist = {};

        // for(let i = 0; i< prelist.length; i++)
        // {
        //     let temp_stuff = ingredients_array[i].split(' ');
        //     let unit_index = -1;
        //     for(let j = 0; j<temp_stuff.length; j++)
        //     {
        //         if(units.includes(temp_stuff[j]))
        //         {
        //             unit_index = j;
        //             break;
        //         }
        //     }

        //     if(unit_index === -1)
        //     {
        //         console.log("???", ingredients_array[i])
        //         debugger
        //     }

        //     let num_units_unedited = temp_stuff[unit_index-1];
        //     let unit_type = temp_stuff[i];
        //     let actual_ingredient = temp_stuff.slice(i+1).join(" ");
        //     if(num_units_unedited)
        //     {

        //     }

        // }


        return (
            <div className="shopping-list">
                
                <div className="shoppinglist-title">Shopping List</div>

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

<<<<<<< HEAD
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
=======
export default ShoppingList
>>>>>>> origin/main
