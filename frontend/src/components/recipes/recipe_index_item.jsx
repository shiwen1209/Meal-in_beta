import React from 'react';
import image from '../../images/default_recipe.jpg'


class RecipeIndex extends React.Component {

    render(){
        const {recipe} = this.props
        return(
            <li className='recipe-item'>
                <p>{recipe.title}</p>
                <p>{recipe.description}</p>
                <img src={image} alt="" width="400" height="300" />
            </li>
        )
    }
}

export default RecipeIndex;