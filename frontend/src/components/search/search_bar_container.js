import { connect } from 'react-redux';
import { searchRecipes } from "../../actions/search_actions.js";
import SearchBar from "./search_bar";


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
                else if (intermission[i].slice(0, 7) === "sortme=") {
                    filters.sortme = intermission[i].slice(7);
                }
                else if (intermission[i].slice(0, 9) === "category=") {
                    filters.category = intermission[i].slice(9);
                }
            }
        }
    }


    return {
        filters: filters,
        complexSearch: supermode,
        recipes: state.entities.recipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchRecipes: (query) => dispatch(searchRecipes(query))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);