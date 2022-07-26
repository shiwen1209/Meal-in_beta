import React from 'react';
import image from '../../images/default_recipe.jpg';
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';


class RecipeIndex extends React.Component {

    render(){
        const {recipe} = this.props
        const avgRating = Math.round(recipe.total_rating / recipe.num_ratings)
        return(
            <div>
            <Link to={`/recipes/${recipe.id}`}>
            <div className='responsive'>
                <div className='gallery'>
                    <div className="image-container">
                        <img src={recipe.image_url} alt="" className='recipe-index-img' />
                        <div className="overlay">
                            <div className='recipe-little-info'>
                            <div className="text">{recipe.title}</div>
                            <div className="index-rating"><Rating rating={avgRating}/></div>
                            </div>
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
                </Link>
            </div>
        )
    }
}

export default RecipeIndex;