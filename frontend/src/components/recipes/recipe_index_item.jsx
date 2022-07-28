import React from 'react';
import image from '../../images/default_recipe.jpg';
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';
import LikeContainer from "../like/like_container";
import { BiTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


class RecipeIndex extends React.Component {
    render(){
        const { recipe, currentUser} = this.props
        const avgRating = Math.round(recipe.total_rating / recipe.num_ratings)
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
                                    {avgRating >= 1 ? <AiFillStar style={{ color: "green", fontSize: '15px' }} /> : < AiOutlineStar style={{ color: "green", fontSize: '15px' }} />}
                                    {avgRating >= 2 ? <AiFillStar style={{ color: "green", fontSize: '15px' }} /> : < AiOutlineStar style={{ color: "green", fontSize: '15px' }} />}
                                    {avgRating >= 3 ? <AiFillStar style={{ color: "green", fontSize: '15px' }} /> : < AiOutlineStar style={{ color: "green", fontSize: '15px' }} />}
                                    {avgRating >= 4 ? <AiFillStar style={{ color: "green", fontSize: '15px' }} /> : < AiOutlineStar style={{ color: "green", fontSize: '15px' }} />}
                                    {avgRating >= 5 ? <AiFillStar style={{ color: "green", fontSize: '15px' }} /> : < AiOutlineStar style={{ color: "green", fontSize: '15px' }} />}
                                </div>
                                <div className="time">
                                        <span><BiTimeFive className="time-icon" /></span>
                                        <span>{recipe.prep_time ? recipe.prep_time : "30 mins"}</span>
                                 </div>
                            </div>

                                
                            


                                {/* {currentUser ?
                                        <span><LikeContainer currentUserId={currentUser.id} recipe={recipe} /></span> :
                                        <div></div>

                                } */}
                          
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