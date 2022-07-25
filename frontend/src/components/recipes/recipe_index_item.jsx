import React from 'react';
import image from '../../images/default_recipe.jpg';
import '../../reset.css';


class RecipeIndex extends React.Component {

    render(){
        const {recipe} = this.props
        return(
            // <div className='recipe-item'>
            <div>
            <div className='responsive'>
                <div className='gallery'>
                    <img src={image} alt="" className='recipe-index-img' />
                    <div className='hide'>{recipe.title}</div>
                    <div>{recipe.title}</div>
                    {/* <div>{recipe.description}</div> */}
                </div>
            </div>
            <div className="clearfix"></div>
            </div>
        )
    }
}

export default RecipeIndex;