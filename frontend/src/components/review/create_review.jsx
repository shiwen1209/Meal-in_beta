import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

class CreateRatingForm extends React.Component{
    constructor(props) {
        super(props)

        // console.log("our props", this.props);
        this.state = {
            rating: 0,
            userId: this.props.currentUserId,
            recipeId: this.props.recipe.id

        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchRecipe(this.props.recipe.id, this.props.currentUserId);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createRating(this.state)
    }

    update(field){
        return (e) => this.setState({
            [field]: parseInt(e.currentTarget.value), 
            recipeId: this.props.recipe.id })
    }

    rate() {
        if (this.state.rating === 0) {
            return "Click to rate"
        } else if (this.state.rating === 1) {
            return "Terrible"
        } else if (this.state.rating === 2) {
            return "Poor"
        } else if (this.state.rating === 3) {
            return "Average"
        } else if (this.state.rating === 4) {
            return "Good"
        } else if (this.state.rating === 5) {
            return "Excellent"
        }
    }
    render(){
        // debugger
        const {recipe, review} = this.props;
        if (!recipe || !review) {
            return (
                <div>rating does not exist</div>
            )
        };
        return (
            <div>

            <div className="rating-box">

                <div className="form-rating">
                    <label htmlFor="rating-1"><input id="rating-1" type="radio" value="1" name="rating" onChange={this.update("rating")} />
                        {this.state.rating >= 1 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }} />}</label>

                    <label htmlFor="rating-2"><input id="rating-2" type="radio" value="2" name="rating" onChange={this.update("rating")} />
                        {this.state.rating >= 2 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }} />}</label>

                    <label htmlFor="rating-3"><input id="rating-3" type="radio" value="3" name="rating" onChange={this.update("rating")} />
                        {this.state.rating >= 3 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }} />}</label>

                    <label htmlFor="rating-4"><input id="rating-4" type="radio" value="4" name="rating" onChange={this.update("rating")} />
                        {this.state.rating >= 4 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }} />}</label>

                    <label htmlFor="rating-5"><input id="rating-5" type="radio" value="5" name="rating" onChange={this.update("rating")} />
                        {this.state.rating >= 5 ? <AiFillStar style={{ color: "green" }} /> : < AiOutlineStar style={{ color: "green" }} />}</label>
                </div>

                <div>
                    <div className="square"><p>{this.rate()}</p></div>

                </div>

            </div>
                <button className="submit-review-button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default CreateRatingForm;