import React from "react";
import headshot from '../../images/default_headshot.png';

class UserShowPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("WOAHHHH");
    this.props.fetchUser(this.props.match.params.userId);
    console.log("id", this.props.match.params.userId);
    this.props.fetchCreatedRecipes(this.props.match.params.userId);
  }

  test() {
    console.log('yo',this.props.fetchLikedRecipes(this.props.match.params.userId));
  }

  countLikedRecipes() {
   this.props.fetchLikedRecipes(this.props.match.params.userId);
   
      
  }

  render() {
    return (
      <div>
        <h1> User Show </h1>
        <div className="user-profile-pic"><img className="profile-pic-img"src={headshot} alt="" /></div>
        <div className="user-handle">
          {this.props.user && <div>{this.props.user.handle}</div>}
        </div>

        <div className="recipe-count"> {this.props.recipes.length} recipes</div>
       {/* <div className="testing">{this.countLikedRecipes()}</div> */}
        <div className="user-bio">
          {this.props.user && <div>{this.props.user.bio}</div>}
        </div>
        {/* <button onClick={this.props.fetchCreatedRecipes(this.props.match.params.userId)}>LOL</button> */}
        {/* {this.props.fetchLikedRecipes(this.props.match.params.userId)} */}
       <div className="make-meal-plan-button">Make a meal plan</div>
        <div className="created-recipes-index">
          {this.props.recipes &&
            this.props.recipes.map((recipe, idx) => (
              <div className="created-recipe">
                {/* <img src={this.props.event.photo} alt="background-pic" /> */}
                {recipe.title}
                </div>
            ))}
        </div>

        <div>{this.props.recipes.title}</div>
      </div>
    );
  }
}

export default UserShowPage;
