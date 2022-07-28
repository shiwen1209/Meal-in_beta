import React from "react";
import Rating from "../rating/rating"
import { SiCodechef } from "react-icons/si";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiShadowFollower } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { TiLeaf } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import CreateRatingContainer from "../review/create_review_container";
import LikeContainer from "../like/like_container";

import headshot from '../../images/default_headshot.png';
import recipeimg from '../../images/default_recipe.jpg';


class Recipe extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId, this.props.currentUser.id);
    }

    componentWillUnmount(){
        this.props.fetchRecipe(this.props.match.params.recipeId, this.props.currentUser.id)
        .then(() => window.location.reload())
    }

    render(){
        const {recipe, currentUser} = this.props;
        let ingredients = recipe.ingredients;
        const avgRating = Math.round(recipe.total_rating / recipe.num_ratings)

        // debugger
        if (!recipe || !recipe.author) return null;
        // debugger
        return (
            <div className="recipe-show-page">
                <div className="left">
                <div className='user-box'>
                    <div className="user-img">
                        <img src={headshot} alt="" />
                    </div>
                    <div className="show-user-info-box">
                        <div className="single-user-info">
                            <span className="user-box-icon"><SiCodechef /></span>
                            <span>{recipe.author.handle}</span>
                        </div>
                        <div className="single-user-info">
                            <span className="user-box-icon"><GiShadowFollower/></span>
                            <span>300 follow</span>
                        </div>
                        <div className="single-user-info">
                            <span className="user-box-icon"><MdOutlineFoodBank/></span>
                            <span>21 recipes</span>
                        </div>
                        <div className="single-user-info">
                            <span className="user-box-icon"><BiMessageSquareDetail /></span>
                            <span>{recipe.author.bio}</span>
                        </div>

                    </div>
                </div>

                <div className="rating-review">
                    <CreateRatingContainer currentUserId={currentUser.id} recipe={recipe} />
                </div>
                </div>

                <div className="recipe-show-box">
                    <div className="recipe-title">{recipe.title}</div>
                    
                    <div className="recipe-show-item">
                        <div className="time">
                            <span><BiTimeFive className="time-icon"/></span>
                            <span>{recipe.prep_time ? recipe.prep_time : "30 mins"}</span>
                        </div>
                        <div className="time">
                            <span><Rating rating={avgRating} className="rating-icon"/></span>
                            <span>({recipe.num_ratings})</span>
                        </div>
                        <div className="time">
                            <span><LikeContainer currentUserId={currentUser.id} recipe={recipe} /></span>
                            {/* <span><FcLike className="time-icon" /></span> */}
                            <span>{recipe.num_likes}</span>
                        </div>
                    </div>

                    <div className="recipe-des">{recipe.description}</div>
                    <img src={recipe.image_url} alt="recipeimg" className="recipe-img" />

                    <div className="ingredient-instruction-box">
                        <div className="ingredient">
                            <div className="ingredient-title">INGREDIENTS</div>
                        <ul>
                        {
                            ingredients.map((ingredient, idx) => (
                                <li key={idx}><TiLeaf className="leaf"/>{ingredient}</li>
                            ))
                        }
                        </ul>
                        </div>
                        <div className="instruction">
                            <div className="instruction-title">INSTRUCTIONS</div>
                            <ol>{
                            recipe.instructions.map(instruction => (
                                <li>{instruction}</li>
                            ))
                            }</ol>
                        </div>
                    </div>

                    <button id="recipe-label-button" onClick={(e) => this.props.openModalPayload({name: "recipeLabel", payload: -1})}>Generate Recipe Label</button>
                    {/* <div className="rating-review">
                        <p>Rate this Recipe</p>
                        <CreateRatingContainer currentUserId={currentUser.id} recipe={recipe} />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Recipe;