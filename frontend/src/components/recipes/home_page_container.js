import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import { fetchRecipes } from '../../actions/recipe_actions';


const mstp = (state)=>{
    return{
        recipes: Object.values(state.entities.recipes),
        type: "home"
    }
}

const mdtp = (dispatch)=>{
    return{
        fetchRecipes: ()=> dispatch(fetchRecipes())
    }
}

export default connect(mstp, mdtp)(RecipeIndex)