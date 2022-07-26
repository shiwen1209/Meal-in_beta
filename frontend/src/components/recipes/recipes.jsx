import React from "react";
import { SiCodechef } from "react-icons/si";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GiShadowFollower } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { TiLeaf } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";


import headshot from '../../images/default_headshot.png';
import recipeimg from '../../images/default_recipe.jpg';



class Recipe extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount() {
        // debugger
        this.props.fetchRecipe(this.props.match.params.recipeId)
    }

    render(){
        const {recipe} = this.props;
        let ingredients = recipe.ingredients;
        // debuggerp
        if (!recipe ||!recipe.author) return null;
        // debugger
        return (
            <div className="recipe-show-page">
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
                            <span className="user-box-icon"><BiMessageSquareDetail /></span>
                            <span>userbio</span>
                        </div>
                        <div className="single-user-info">
                            <span className="user-box-icon"><GiShadowFollower/></span>
                            <span>300 follow</span>
                        </div>
                        <div className="single-user-info">
                            <span className="user-box-icon"><MdOutlineFoodBank/></span>
                            <span>21 recipes</span>
                        </div>
                    </div>
                </div>

                <div className="recipe-show-box">
                    <div className="recipe-title">{recipe.title}</div>
                    
                    <div className="recipe-show-item">
                        <div className="time">
                            <span><BiTimeFive className="time-icon"/></span>
                            <span>{recipe.prep_time}</span>
                        </div>
                        <div className="time">
                            <span>
                                <AiFillStar className="rating-icon" />
                                <AiFillStar className="rating-icon" />
                                <AiFillStar className="rating-icon" />
                                <AiFillStar className="rating-icon" />
                                <AiFillStar className="rating-icon" />
                            </span>
                            <span>({recipe.num_ratings})</span>
                        </div>
                        <div className="time">
                            <span><FcLike className="time-icon" /></span>
                            <span>{recipe.num_favorites}</span>
                        </div>
                    </div>

                    <div className="recipe-des">{recipe.description}</div>
                    <img src={recipeimg} alt="recipeimg" className="recipe-img" />

                    <div className="ingredient-instruction-box">
                        <div className="ingredient">
                            <div className="ingredient-title">INGREDIENTS</div>
                        <ul>
                        {
                            ingredients.map(ingredient => (
                                <li><TiLeaf className="leaf"/>{ingredient}</li>
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
                </div>
                
            </div>
        )
    }
}

export default Recipe;