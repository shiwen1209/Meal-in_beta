import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import indexbg from '../../images/indexbg.jpg';
import SearchContainer from '../search/search_bar_container';
import {withRouter } from 'react-router-dom';


class RecipeIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchRecipes();
    }


    render(){
        const {recipes, currentUser} = this.props;
        if (!recipes){return}
        
        const recipesList1 = recipes
        .filter((recipe) => (recipe.category === "world-cuisine") )
        .map((recipe, index)=>(
            <RecipeIndexItem key={index} recipe ={recipe}/>
        ))

        const recipesList2 = recipes
            .filter((recipe) => (recipe.category === "main-dish"))
            .map((recipe, index) => (
                <RecipeIndexItem key={index} recipe={recipe} />
            ))

        const recipesList3 = recipes
            .filter((recipe) => (recipe.category === "breakfast-and-brunch" ||
                recipe.category === "drinks"))
            .map((recipe, index) => (
                <RecipeIndexItem key={index} recipe={recipe} />
            ))

        const recipesList4 = recipes
            .filter((recipe) => (recipe.category === "appetizers-and-snacks"))
            .map((recipe, index) => (
                <RecipeIndexItem key={index} recipe={recipe} />
            ))

        const recipesList5 = recipes
            .filter((recipe) => (recipe.category === "salad"))
            .map((recipe, index) => (
                <RecipeIndexItem key={index} recipe={recipe} />
            ))


        return(
            <div className='recipe-index'>
                {this.props.type === "splash" ? 
                <div className="image-section">
                    <img src={indexbg} alt="" className="recipe-bg" />
                </div> :
                <div></div>
                }

                <SearchContainer page={this.props.type === "splash" ? "index-search" : ""}/>
                <div className='recipe-box'>
                    <div className='index-cg'>
                        <div>
                            <h1>Recommended for your</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList1}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>TicTok trending</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList2}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Boozy brunch</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList3}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Party faves</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList4}
                        </div >
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Vegan loves</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList5}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default withRouter(RecipeIndex);