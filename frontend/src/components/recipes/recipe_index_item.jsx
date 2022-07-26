import React from 'react';
import image from '../../images/default_recipe.jpg';
import headshot from '../../images/default_headshot.png';


class RecipeIndex extends React.Component {

    render(){
        const {recipe} = this.props
        return(
            <div>
            <div className='responsive'>
                <div className='gallery'>

                    <div className="image-container">
                        <img src={recipe.recipeImageUrl} alt="" className='recipe-index-img' />
                        <div className="overlay">
                            <div className="text">{recipe.title}</div>
                        </div>
                    </div>

                    <div className='user-little-info'>
                        <div className='user-little-img'>
                            <img src={headshot} alt="" />
                        </div>
                        <div className="user-little-name">{recipe.author_name}</div>
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