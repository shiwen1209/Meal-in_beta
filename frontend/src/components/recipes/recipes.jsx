import React from "react";

class Recipe extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId)
    }

    render(){
        const {recipe} = this.props;
        if (!recipe) return null;
        debugger
        return (
            <div>
                {recipe.title}
            </div>
        )
    }
}

export default Recipe;