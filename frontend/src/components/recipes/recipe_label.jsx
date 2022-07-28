import React from 'react';
import { connect } from 'react-redux';

import nutritionLabel from "nutrition-label-jquery-plugin" //bruh

const $ = window.jQuery; //bootstrapped bad boy 

class RecipeLabel extends React.Component {
  componentDidMount() {
    // Use your jQuery as usual!
    let info = this.props.theWorks.nutrients;

    //missing vitamin B and trans fat in the data scraping... need to redo to get info
    $('#recipeLabelerReplace').nutritionLabel({
      itemName : this.props.theWorks.title,
      showIngredients : false,
      decimalPlacesForQuantityTextbox : 3,
      valueServingUnitQuantity : 1,
      decimalPlacesForNutrition : 0,
      showPolyFat : false,
      showMonoFat : false,
      showTransFat : false,

      valueCalories : info.calories,
      valueTotalFat : info.fat_g,
      valueFatCalories : info.calories_from_fat,
      valueSatFat : info.saturated_fat_g,
      valueCholesterol : info.cholesterol_mg,
      valueSodium : info.sodium_mg,
      valueTotalCarb : info.carbohydrates_g,
      valueFibers : info.dietary_fiber_g,
      valueSugars : info.sugars_g,
      valueProteins : info.protein_g,
      valueVitaminA : info.vitamin_a_iu_IU * .02,
      valueVitaminC : info.vitamin_c_mg,
      valueCalcium : info.calcium_mg * .1,
      valueIron : info.iron_mg * 5
    });

  }
  render() {
    return (

    <div id="recipeLabel">
      <div id="recipeLabelerReplace">You shouldn't see this. Close your eyes.</div>
    </div>)
  }
}

const mSTP = (state, ownProps) => {

    return{
        theWorks: ownProps.payload === -1 ? state.entities.currentRecipe : ownProps.payload
}}

const mDTP = (dispatch) => ({
   
});

export default connect(mSTP, mDTP)(RecipeLabel)
