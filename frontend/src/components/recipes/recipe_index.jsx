import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import indexbg from '../../images/indexbg.jpg';
import SearchBar from '../search/search_bar';

class RecipeIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchRecipes();
    }

    render(){
        const {recipes} = this.props;
        if (!recipes){return}
        
        const recipesList = recipes.map((recipe, index)=>(
            <RecipeIndexItem key={index} recipe ={recipe}/>
        ))
        
        return(
            <div className='recipe-index'>
                {this.props.type === "splash" ? 
                <div className="image-section">
                    <img src={indexbg} alt="" className="recipe-bg" />
                </div> :
                <div></div>
                }

                <SearchBar formType="index-search" />
                <div className='recipe-box'>
                    <div className='index-cg'>
                        <div>
                            <h1>Recommended for your</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList.slice(0, 8)}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>TicTok trending</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList.slice(0, 8)}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Boozy brunch</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList.slice(0, 8)}
                        </div>
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Party faves</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList.slice(0, 8)}
                        </div >
                    </div>
                    <div className='index-cg'>
                        <div>
                            <h1>Vegan loves</h1>
                        </div>
                        <div className="recipe-cg-container">
                            {recipesList.slice(0, 8)}
                        </div>
                    </div>
                </div>

                

            </div>
            
        )
    }

}

export default RecipeIndex;