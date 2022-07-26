import React from "react";
import { SiCodechef } from "react-icons/si";
import { GrArticle } from "react-icons/gr";
import { GiShadowFollower } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
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
        // debugger
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
                            <span className="user-box-icon"><GrArticle/></span>
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
                    <div>{recipe.title}</div>
                    <img src={recipeimg} alt="recipeimg" />
                </div>
                
            </div>
        )
    }
}

export default Recipe;