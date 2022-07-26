import React from "react";

class SearchBar extends React.Component{

    render(){
        return(
            <div className="search-bar">
                <input type="text" placeholder="Find a recipe"/>
            </div>
        )
    }


}

export default SearchBar;