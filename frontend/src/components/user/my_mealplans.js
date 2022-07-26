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
                    <div className="grid-container">
                        <div className="grid-item"></div>
                        <div className="grid-item">BREAKFAST</div>
                        <div className="grid-item">  LUNCH  </div>
                        <div className="grid-item">  DINNER </div>
                        <div className="grid-item">MON</div>
                        <div className="grid-item">6</div>
                        <div className="grid-item">7</div>
                        <div className="grid-item">8</div>
                        <div className="grid-item">TUE</div>
                        <div className="grid-item">1</div>
                        <div className="grid-item">2</div>
                        <div className="grid-item">3</div>
                        <div className="grid-item">WED</div>
                        <div className="grid-item">5</div>
                        <div className="grid-item">6</div>
                        <div className="grid-item">7</div>
                        <div className="grid-item">THU</div>
                        <div className="grid-item">9</div>
                        <div className="grid-item">7</div>
                        <div className="grid-item">8</div>
                        <div className="grid-item">FRI</div>
                        <div className="grid-item">7</div>
                        <div className="grid-item">8</div>
                        <div className="grid-item">9</div>
                        <div className="grid-item">SAT</div>
                        <div className="grid-item">2</div>
                        <div className="grid-item">3</div>
                        <div className="grid-item">4</div>
                        <div className="grid-item">SUN</div>
                        <div className="grid-item">6</div>
                        <div className="grid-item">7</div>
                        <div className="grid-item">8</div>
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