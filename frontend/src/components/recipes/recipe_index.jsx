import React from 'react';
import RecipeIndexItem from './recipe_index_item'
import indexbg from '../../images/indexbg.jpg'

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
            <div>
                <img src={indexbg} alt=""  />
               <h1>List of recipes</h1>
               <ul>
                    {recipesList}
               </ul>

            </div>
            
        )
    }

}

export default RecipeIndex;