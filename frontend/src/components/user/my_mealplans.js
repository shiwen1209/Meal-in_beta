import React from 'react';
import SearchBar from "../search/search_bar";
// import RecipeIndexItem from '../recipes/recipe_index_item';

class MyMealplans extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            filteredResult: this.props.recipes,
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleUpdate(e){
        const word = e.currentTarget.value.toLowerCase();
        this.setState({ searchValue: word });
        const resultList = this.props.recipes.filter((recipe) => (recipe.title.toLowerCase().includes(word)));
        this.setState({ filteredResult: resultList });
    }


    render() {
        console.log(this.state)
        const {user, recipes} = this.props;
        if(!user || !recipes){return null}
        const recipesList = this.state.filteredResult.map((recipe, idx) => (
            <li key={idx} className="mp-recipe-item">
                <img src={recipe.image_url} alt="" className='recipe-index-img' />
                <div>
                    <h2>{recipe.title}</h2>
                </div>
            </li>
        ))
        return (
            <div className='my-mealplan'>
                <div className='mealplan-recipes'>
                    <div className="mealplan-search">
                        <input 
                        onChange={this.handleUpdate}
                        type="text" placeholder="Find a recipe" />
                    </div>
                    <div className='mp-recipe-list'>
                        <ul>
                            {recipesList}
                        </ul>
                    </div>

                </div>
                <div className='mealplan-main'>
                    <h1>MyMealplans</h1>
                    <div class="grid-container">
                        <div class="grid-item"></div>
                        <div class="grid-item">BREAKFAST</div>
                        <div class="grid-item">  LUNCH  </div>
                        <div class="grid-item">  DINNER </div>
                        <div class="grid-item">MON</div>
                        <div class="grid-item">6</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">8</div>
                        <div class="grid-item">TUE</div>
                        <div class="grid-item">1</div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>
                        <div class="grid-item">WED</div>
                        <div class="grid-item">5</div>
                        <div class="grid-item">6</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">THU</div>
                        <div class="grid-item">9</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">8</div>
                        <div class="grid-item">FRI</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">8</div>
                        <div class="grid-item">9</div>
                        <div class="grid-item">SAT</div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>
                        <div class="grid-item">4</div>
                        <div class="grid-item">SUN</div>
                        <div class="grid-item">6</div>
                        <div class="grid-item">7</div>
                        <div class="grid-item">8</div>
                    </div>
                    <div className='mealplan-buttons'>
                        <button className='nav-bar-login'>Clear All</button>
                        <button className='nav-bar-login'>Finalize Mealplan</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyMealplans;