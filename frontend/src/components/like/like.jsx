import React from "react";
import { BiHeartCircle } from "react-icons/bi";

class Like extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userId: this.props.currentUserId,
            recipeId: this.props.recipe.id,
            user_liked: this.props.currentRecipe.user_liked
        }
        this.handleLike = this.handleLike.bind(this);
        // this.handleDislike = this.handleDislike.bind(this);
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.recipe.id, this.props.currentUserId);
    }

    handleLike(e){
        e.preventDefault();
        if (this.state.user_liked){
            debugger
            this.setState({
                user_liked: !this.props.currentRecipe.user_liked
            })
            this.props.deleteLike(this.state);
        }else{
            this.setState({
                user_liked: !this.props.currentRecipe.user_liked
            })
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
        const {recipe} = this.props;
        if (!recipe) return null;
        return(
            <div>
                    <button onClick={this.handleLike } >
                    {this.state.user_liked === false ? <BiHeartCircle /> : <BiHeartCircle style={{ color: "red" }} />}
                    </button> 
            </div>
        )
    }

}

export default Like;