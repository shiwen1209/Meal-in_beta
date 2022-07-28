import React from "react";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import plate from "../../images/plate.png"

import { searchRecipes } from "../../actions/search_actions.js"
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            budget: null,
            category: null,
            sortme: null
            // rating: null
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    componentDidMount() {
      
        this.props.searchRecipes(this.props.filters);
    }

    componentDidUpdate(prevProps){
        //BRUH ok this needs to be fixed later
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
        // if(this.state.rating)
        // {
        //     if(first)
        //     {
        //         newLink += `?rating=${this.state.rating}`
        //         first = false;
        //     }

        //     else{
        //         newLink += `&rating=${this.state.rating}`
        //     }
        // }
        alert(newLink);

        //reset state if needed
    }

    render() {
        // if (!this.props.complexSearch) {
        //     return (
        //         <div className="search-bar">
        //             <form id="mainpage-search-form" onSubmit={this.handleSubmit}>
        //                 {/* <form id="search-form" onSubmit={this.handleSubmit}> */}

        //                 <input id="search-input-large" value={this.state.title} onChange={this.update("title")} type="text" />

        //                 <input type="submit" />
        //             </form>
        //         </div>
        //     )
        // }
        return (
            <div className="search-bar">
                <div className="icon">
                <i class="fa-solid fa-utensils"></i>

                </div>

                <form id="search-form" onSubmit={this.handleSubmit}>
                    {/* <form id="search-form" onSubmit={this.handleSubmit}> */}
                    <select value={this.state.catgeory} onChange={this.update("category")}>
                        <option value={null} selected>Select a meal category</option>
                        <option value="appetizers-and-snacks">Appetizers and Snacks</option>
                        <option value="breakfast-and-brunch">Breakfast</option>
                        <option value="desserts">Desserts</option>
                        <option value="drinks">Drinks</option>
                        <option value="main-dish">Main Dish</option>
                        <option value="meat-and-poultry">Meat</option>
                        <option value="Salad">Salad</option>
                        <option value="World Cuisine">World Cuisine</option>
                    </select>
                    <select value={this.state.budget} onChange={this.update("budget")}>
                        <option value={null} selected>--Budget--</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                    <input value={this.state.title} onChange={this.update("title")} type="text" />
                    {/* <select value={this.state.rating}>
                        <option value="3">3 Stars+</option>
                        <option value="4">4 Stars+</option>
                        <option value="5">5 Stars</option>
                    </select> */}

                    {/* <label htmlFor="sort-method-select">Sorted By:</label> */}
                    <select id="sort-method-select" value={this.state.sortme} onChange={this.update("sortme")}>
                        <option value={null} selected >Sort by:</option>
                        <option value="recent" >Recent</option>
                        <option value="popularity" >Popular</option>
                    </select>
                    {/* <input type="submit" /> */}
                </form>
                <div className="icon" onClick={this.handleSubmit}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let filters = {};
    let supermode = false;
    if (ownProps.location) {
        if (ownProps.location.pathname === '/search') {
            supermode = true;
        }
        if (ownProps.location.search) {
            const fullQueryString = ownProps.location.search.slice(1);
            let intermission = fullQueryString.split("&");
            for (let i = 0; i < intermission.length; i++) {
                if (intermission[i].slice(0, 6) === "title=") {
                    filters.title = intermission[i].slice(6);
                }
                else if (intermission[i].slice(0, 7) === "budget=") {
                    filters.budget = parseInt(intermission[i].slice(7));
                }
                // else if(intermission[i].slice(0, 7)==="rating=")
                // {
                //     filters.budget = parseInt(intermission[i].slice(7));
                // }
                else if (intermission[i].slice(0, 7) === "sortme=") {
                    filters.sortme = intermission[i].slice(7);
                }
                else if (intermission[i].slice(0, 9) === "category=") {
                    filters.sortme = intermission[i].slice(9);
                }
            }
        }
    }


    return {
        filters: filters,
        complexSearch: supermode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchRecipes: (query) => dispatch(searchRecipes(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);