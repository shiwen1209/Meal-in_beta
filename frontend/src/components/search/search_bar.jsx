import React from "react";

class SearchBar extends React.Component{

    render(){
        const {formType} = this.props
        return(
            <div className={formType}>
                <input type="text" placeholder="Find a recipe"/>
            </div>
        )
    }


}

export default SearchBar;