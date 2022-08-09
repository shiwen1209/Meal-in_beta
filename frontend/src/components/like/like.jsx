import React from "react";
import { BiHeartCircle } from "react-icons/bi";

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.currentUserId,
            recipeId: this.props.recipe.id
        }
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.recipe.id, this.props.currentUserId);
    }

    handleLike(e){
        e.preventDefault();
        if (this.props.currentRecipe.user_liked){
            this.props.deleteLike(this.state);
        }else{
            this.props.createLike(this.state);
        }
    };


    render(){
        const { recipe, currentRecipe } = this.props;
        if (!recipe) return null;
        return(
            <div>
                    <button onClick={this.handleLike }>
                    {!currentRecipe.user_liked ? <BiHeartCircle style={{fontSize: "30px"  }}/> : <BiHeartCircle style={{ color: "red", fontSize: "30px" }} />}
                    </button> 
            </div>
        )
    }

}

export default Like;