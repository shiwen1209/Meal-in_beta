import React from "react";
import { BiHeartCircle } from "react-icons/bi";

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.currentUserId,
            recipeId: this.props.recipe.id
            // user_liked: this.props.currentRecipe.user_liked
        }
        this.handleLike = this.handleLike.bind(this);
        // this.handleDislike = this.handleDislike.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.recipe.id, this.props.currentUserId);
    }

    handleLike(e){
        e.preventDefault();
        if (this.props.currentRecipe.user_liked){
            // this.setState({user_liked: false})
            this.props.deleteLike(this.state);
        }else{
            // this.setState({
            //     user_liked: true
            // })
            this.props.createLike(this.state);
        }
    };

    // handleDislike(){
    //     // e.preventDefault();
    //     this.props.deleteLike(this.state)
    // }

    // update(field) {
    //     return (e) => this.setState({
    //         [field]: e.currentTarget.value
    //     })
    // }


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