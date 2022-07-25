import React from 'react';
import RecipeIndexItem from './recipe_index_item'
import indexbg from '../../images/indexbg.jpg'
import "../../app.css"

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
                <div className="image-section">
                    <img src={indexbg} alt="" className="recipe-bg" />
                </div>
               <h1>List of recipes</h1>
                {/* <div className='responsive'> */}
                <div className='recipe-box'>
                    {recipesList}
                </div>
               {/* </div> */}
                

            </div>
            
        )
    }

}

export default RecipeIndex;