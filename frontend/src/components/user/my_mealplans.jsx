import React from 'react';
import NutritionData from './my_mealplans_bar_chart';

class MyMealplans extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: "mealplan",
            displayFinalize: false,
            searchValue: "",
            filteredResult: this.props.recipes,
            activeRecipe: null,
            mealplan: {
                name: "",
                owner_id: this.props.currentUserId,
                meals: []
            }
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleMPClick = this.handleMPClick.bind(this);
        this.updateMpName = this.updateMpName.bind(this);
        this.submitMealplan = this.submitMealplan.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
            .then(async ()=> this.setState({ filteredResult: this.props.recipes}));
        }

    handleUpdate(e){
        const word = e.currentTarget.value.toLowerCase();
        this.setState({ searchValue: word });
        const resultList = this.props.recipes.filter((recipe) => (recipe.title.toLowerCase().includes(word)));
        this.setState({ filteredResult: resultList });
    }

    handleMPClick(day, meal_type){
        return (e)=>{
        if(this.state.activeRecipe){
            const dup = this.state.mealplan.meals.filter((meal)=>(meal.day === day && meal.meal_type === meal_type))
            let mealplan = this.state.mealplan
            const m = {
                day,
                meal_type,
                recipe_id: this.state.activeRecipe._id,
                recipe_title: this.state.activeRecipe.title
            }
            if(dup.length === 0 ){
                mealplan.meals.push(m)
            } else {
                mealplan.meals = this.state.mealplan.meals.filter((meal) => (meal.day !== day || meal.meal_type !== meal_type))
                mealplan.meals.push(m)
            }
            this.setState({ mealplan, activeRecipe: null})
        }
        }
    }

    updateMpName(e){
        let mealplan = this.state.mealplan;
        mealplan.name = e.currentTarget.value;
        this.setState({mealplan})
    }

    submitMealplan(e){
        e.preventDefault();
        this.props.createMealplan(this.state.mealplan);
        this.setState({ displayFinalize: true })
    }

    render() {
    
        const { user, recipes, openModalPayload, nutrients, mealplan} = this.props;
        if(!user || !recipes){return null}

        const nutrientsList = Object.keys(nutrients).map((n_key, idx)=>(
            <li key={idx}>
                <p>{n_key}</p>
                <p>{nutrients[n_key]}</p>
            </li>

        ))

        const recipesList = this.state.filteredResult.map((recipe, idx) => (
            <li key={idx} className="mp-recipe-item"
                onClick={(e) => {
                    this.setState({ activeRecipe : recipe});
                    
                    }}>
                <img src={recipe.image_url} alt="" className='recipe-index-img' />
                <div>
                    <h2>{recipe.title}</h2>
                </div>
            </li>
        ))  


        const meals = [];
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        const mealTypes = [0, "breakfast", "lunch", "dinner"];
        for(let i=0; i< days.length; i++) {
            for (let j = 0; j < mealTypes.length; j++){
                meals.push([days[i], mealTypes[j]]);
            }
        }

        // const mealGrid = meals.map((meal)=>{
        //     if(meal[1] === 0 ){
        //         return (<div className="grid-item">{meal[0]}</div>)
        //     } else {
        //         return (
        //             <div className="grid-item" onClick={this.handleMPClick(meal[0], meal[1])}>
        //                 {this.state.mealplan.meals.filter((meal) => (meal.day === meal[0] && meal.meal_type === meal[1]))[0] ?
        //                 this.state.mealplan.meals.filter((meal) => (meal.day === meal[0] && meal.meal_type === meal[1]))[0].recipe_title : ""
        //                 }
        //             </div>
        //         )
        //     }
        // })

  

        

        return (
            <div className='my-mealplan'>
                <div className='mealplan-recipes'>
                    <div className="mealplan-search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                        onChange={this.handleUpdate}
                        type="text" placeholder="Find a recipe" />
                    </div>
                    <div className='mp-recipe-list'>
                        {recipesList.length > 0 ? 
                        <ul>
                            {recipesList}
                        </ul> : <div>Result not found</div>
                        }
                    </div>

                </div>
                <div className='mealplan-main'>
                    <div className='mealplan-tabs'>
                        <div>
                            <h1 onClick={(e) => this.setState({display: "mealplan"})}>MyMealplans</h1>
                        </div>
                        <div>
                            <h1 onClick={(e) => this.setState({display: "nutrition"})}>Nutrition Value</h1>
                        </div>
                    </div>
                    {this.state.display === "mealplan" ?
                    <div className='mealplan-sub'>
                        <div>
                            <label>Enter a mealplan name
                                <input type="text" placeholder='Enter a mealplan name'
                                onChange={this.updateMpName} value = {this.state.mealplan.name}/>
                            </label>
                            <p>Number of servings</p>
                        </div>
                        <div className="grid-container">
                            <div className="grid-item"></div>
                            <div className="grid-item">BREAKFAST</div>
                            <div className="grid-item">  LUNCH  </div>
                            <div className="grid-item">  DINNER </div>
                            {/* {mealGrid} */}

                            <div className="grid-item">MON</div>
                            <div className="grid-item" 
                                onClick={this.handleMPClick("mon", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "breakfast"))[0] ? 
                                this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                            }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("mon", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("mon", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "mon" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">TUE</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("tue", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("tue", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("tue", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "tue" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">WED</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("wed", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("wed", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("wed", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "wed" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">THU</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("thu", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("thu", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("thu", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "thu" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">FRI</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("fri", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("fri", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("fri", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "fri" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">SAT</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sat", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sat", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sat", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sat" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item">SUN</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sun", "breakfast")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "breakfast"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "breakfast"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sun", "lunch")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "lunch"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "lunch"))[0].recipe_title : ""
                                }</div>
                            <div className="grid-item"
                                onClick={this.handleMPClick("sun", "dinner")}
                            >{this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "dinner"))[0] ?
                                this.state.mealplan.meals.filter((meal) => (meal.day === "sun" && meal.meal_type === "dinner"))[0].recipe_title : ""
                                }</div>
                        </div>
                        {!this.state.displayFinalize ? 
                            <div className='mealplan-buttons'>
                                    <button className='nav-bar-login'>Clear All</button>
                                    <button
                                        onClick={this.submitMealplan}
                                        className='nav-bar-login'>Finalize Mealplan</button>
                            </div> : 
                            <div className='mealplan-results'>
                                    <h1 >Mealplan finalized!</h1>
                                    <h1 onClick={e => {
                                        console.log("clicked")
                                        openModalPayload({ name: "shoppingList", payload: this.state.mealplan})}}
                                     className='shopping-link'>See shopping list</h1>
                            </div>
                        
                        
                        }

                    </div> : 
                    <div className='nutrition-sub'>
                        {/* <ul>
                                {nutrientsList.slice(0, 7)}
                        </ul>
                        <ul>
                                {nutrientsList.slice(7, 14)}
                        </ul>
                        <ul>
                                {nutrientsList.slice(14)}
                        </ul> */}

                            <NutritionData nutrients={nutrients}/>

                    </div>
                    }

                </div>
            </div>
        )



    
    }
}

export default MyMealplans;