import React from "react";
import {withRouter } from 'react-router-dom';
import RecipeIndexItem from '../recipes/recipe_index_item';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            budget: '',
            category: '',
            sortme: ''
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearSearch = this.handleClearSearch.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    componentDidMount() {
        if(this.props.complexSearch)
        {
            this.props.searchRecipes(this.props.filters);

        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search){
            this.props.searchRecipes(this.props.filters);
        }

    }

    handleSubmit(e) {
        e.preventDefault();

        let newLink = "/search"
        let first = true;

        if (this.state.title) {
            newLink += `?title=${this.state.title}`;
            first = false;
        }
        if (this.state.category) {
            if (first) {
                newLink += `?category=${this.state.category}`
                first = false;
            }
            else {
                newLink += `&category=${this.state.category}`
            }
        }
        if (this.state.sortme) {
            if (first) {
                newLink += `?sortme=${this.state.sortme}`
                first = false;
            }
            else {
                newLink += `&sortme=${this.state.sortme}`
            }
        }
        if (this.state.budget) {
            if (first) {
                newLink += `?budget=${this.state.budget}`
                first = false;
            }
            else {
                newLink += `&budget=${this.state.budget}`
            }
        }
        this.props.history.push(`${newLink}`)
    }

   async handleClearSearch(e){
        await this.props.history.push(`/search`)
       this.setState(
           {
               title: '',
               budget: '',
               category: "",
               sortme: ""
           }
       )

    }
    
    render() {
        let searchResult;
        if (this.props.recipes.constructor === Array){
          searchResult = this.props.recipes.map((recipe, idx) => (
                <RecipeIndexItem key={idx} recipe={recipe} />
            ))
        }

        return (
            <div id={this.props.page} className={this.props.location.pathname === '/recipes' ? "search-container2" : "search-container"}>
                <div className="search-bar">
                    <div className="icon">
                    <i className="fa-solid fa-utensils"></i>
                    </div>

                    <form id="search-form" onSubmit={this.handleSubmit}>
                        {/* <form id="search-form" onSubmit={this.handleSubmit}> */}
                        <select value={this.state.category} onChange={this.update("category")} >
                            <option value={""}>Select meal category</option>
                            <option value="appetizers-and-snacks">Appetizers and Snacks</option>
                            <option value="breakfast-and-brunch">Breakfast</option>
                            <option value="desserts">Desserts</option>
                            <option value="drinks">Drinks</option>
                            <option value="main-dish">Main Dish</option>
                            <option value="meat-and-poultry">Meat</option>
                            <option value="Salad">Salad</option>
                            <option value="World Cuisine">World Cuisine</option>
                        </select>
                        <select value={this.state.budget} onChange={this.update("budget")} >
                            <option value={""}>Select budget</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                        </select>
                        <input 
                        placeholder="Enter a dish name"
                        value={this.state.title} onChange={this.update("title")} type="text" />
                        {/* <select value={this.state.rating}>
                            <option value="3">3 Stars+</option>
                            <option value="4">4 Stars+</option>
                            <option value="5">5 Stars</option>
                        </select> */}

                        {/* <label htmlFor="sort-method-select">Sorted By:</label> */}
                        <select id="sort-method-select" value={this.state.sortme} onChange={this.update("sortme")}>
                            <option value={""} >Sort by type</option>
                            <option value="recent" >Recent</option>
                            <option value="popularity" >Popular</option>
                        </select>
                        {/* <input type="submit" /> */}
                    </form>
                    <div className="icon" onClick={this.handleSubmit}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                
                {this.props.location.pathname !== '/recipes' && this.props.location.search.length > 0 ?
                        <div className="clear-search">
                            <div>
                                <i className="fa-solid fa-xmark"></i>
                                <p onClick={this.handleClearSearch}> Clear search</p> 
                            </div>

                       </div> 
                    : <div></div>
                }
                

                {this.props.page !== "index-search" && this.props.location.pathname !== '/recipes' ? 
                    <div className='recipe-box'>
                            {searchResult}
                    </div> :
                    <div></div>
                }

            </div>
        )
    }
}

export default withRouter(SearchBar)