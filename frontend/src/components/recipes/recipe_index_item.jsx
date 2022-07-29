import React from 'react';
import image from '../../images/default_recipe.jpg';
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import LikeContainer from "../like/like_container";
import { BiTimeFive } from "react-icons/bi";

import FullStar from '../../images/full_star.svg';
import HalfStar from '../../images/half_star.svg';

import EmptyStar from '../../images/empty_star.svg';


class RecipeIndex extends React.Component {
    render(){
        const { recipe, currentUser} = this.props
        const avgRating = recipe.total_rating / recipe.num_ratings

        let full_stars = 0;
        let half_star = 0;
        if(avgRating < 0.75)
        {
            half_star = 1;
        }
        else if(avgRating < 1.25)
        {
            full_stars = 1;
        }
        else if(avgRating < 1.75)
        {
            full_stars = 1;
            half_star = 1;
        }
        else if(avgRating < 2.25)
        {
            full_stars = 2;
        }
        else if(avgRating < 2.75)
        {
            full_stars = 2;
            half_star = 1;

        }
        else if(avgRating < 3.25)
        {
            full_stars = 3;
        }
        else if(avgRating < 3.75)
        {
            full_stars = 3;
            half_star = 1;

        }
        else if(avgRating < 4.25)
        {
            full_stars = 4;
        }
        else if(avgRating < 4.75)
        {
            full_stars = 4;
            half_star = 1;
        }
        else
        {
            full_stars = 5;
        }

        return(
            <div>
            <Link to={`/recipes/${recipe.id}`}>
            <div className='responsive'>
                <div className='gallery'>
                    <div className="image-container">
                        <img src={recipe.image_url} alt="" className='recipe-index-img' />
                        {/* <div className="overlay">
                            <div className='recipe-little-info'>
                            <div className="text">{recipe.title}</div>
                            <div className="index-rating"><Rating rating={avgRating}/></div>

                            </div>
                        </div> */}
                    </div>
                    <div className='user-little-info'>
                            <h3>{recipe.title}</h3>
                            <div className='sub-info'>
                                <div className='rating'>
                                   {full_stars >= 1 ? <img className="star-2" src={FullStar}></img> : null}
                                {full_stars >= 2 ? <img className="star-2" src={FullStar}></img> : null}
                                {full_stars >= 3 ? <img className="star-2" src={FullStar}></img> : null}
                                {full_stars >= 4 ? <img className="star-2" src={FullStar}></img> : null}
                                {full_stars == 5 ? <img className="star-2" src={FullStar}></img> : null}
                                {half_star === 1 ? <img className="star-2" src={HalfStar}></img> : null}
                                {5 - full_stars - half_star >= 1 ? <img className="star-2" src={EmptyStar}></img> : null}
                                {5 - full_stars - half_star >= 2 ? <img className="star-2" src={EmptyStar}></img> : null}
                                {5 - full_stars - half_star >= 3 ? <img className="star-2" src={EmptyStar}></img> : null}
                                {5 - full_stars - half_star >= 4 ? <img className="star-2" src={EmptyStar}></img> : null}
                                {5 - full_stars - half_star >= 5 ? <img className="star-2" src={EmptyStar}></img> : null}
                                </div>
                                <div className="time">
                                        <span><BiTimeFive className="time-icon" /></span>
                                        <span>{recipe.prep_time ? recipe.prep_time : "30 mins"}</span>
                                 </div>
                            </div>
                    </div>
                </div>

            </div>

                <div className="clearfix"></div>
                </Link>
            </div>
        )
    }
}

export default RecipeIndex;