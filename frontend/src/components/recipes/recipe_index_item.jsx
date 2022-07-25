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
                    <div className='user-little-info'>
                        <div className='user-little-img'></div>
                        <div className="user-little-name">{recipe.author_name}</div>
                    </div>
                <div className="overlay">
                    <div className="text">{recipe.title}</div>
                </div>
                    {/* <div>{recipe.title}</div> */}
                    {/* <div>{recipe.description}</div> */}
                </div>

            </div>
            <div className="clearfix"></div>
            </div>
        )
    }
}

export default RecipeIndex;