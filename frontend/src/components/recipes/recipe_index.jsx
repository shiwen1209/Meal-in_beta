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

                <SearchBar />
                <div className='recipe-box'>
                    {recipesList}
                </div>

                

            </div>
            
        )
    }

}

export default RecipeIndex;