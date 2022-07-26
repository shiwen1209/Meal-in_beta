import React from "react";
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom'
;
class UserShowPage extends React.Component {
  componentDidMount() {

    // console.log("WOAHHHH");
    this.props.fetchUser(this.props.match.params.userId);
    // console.log("id", this.props.match.params.userId);
    // this.props.fetchLikedRecipes(this.props.match.params.userId);
    // this.props.fetchLikedRecipes
  }

  test() {
    console.log('yo',this.props.fetchLikedRecipes(this.props.match.params.userId));
  }

  countLikedRecipes() {
   this.props.fetchLikedRecipes(this.props.match.params.userId);
   
  }

  render() {

    const { recipes_liked, recipes_created, user } = this.props;
    if (!recipes_created || !user || !recipes_liked) {
      return null;
    }
    return (
      <div className="show-page-section">
        <h1> User Show </h1>
        <div className="user-profile-pic">
          <img className="profile-pic-img" src={headshot} alt="" />
        </div>
        <div className="user-handle">{user && <div>{user.handle}</div>}</div>

        <div className="recipe-count"> {recipes_created.length} recipes</div>
        {/* <div className="testing">{this.countLikedRecipes()}</div> */}
        <div className="user-bio">{user && <div>{user.bio}</div>}</div>
        {/* <button onClick={this.props.fetchCreatedRecipes(this.props.match.params.userId)}>LOL</button> */}
        {/* {this.props.fetchLikedRecipes(this.props.match.params.userId)} */}
        <div className="make-meal-plan-button">Make a meal plan</div>
        <div className="created-recipes-index">
          {recipes_created &&
            recipes_created.map((recipe, idx) => (
              <Link to={`/recipes/${recipe.id}`}>
                <div key={idx} className="created-recipe">
                  <img
                    className="user-show-recipe-image"
                    src={recipe.image_url}
                    alt="background-pic"
                  />
                  <div className="user-show-recipe-title">{recipe.title}</div>
                  <div className="edit-button"><i class="fa-solid fa-pen"></i></div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default UserShowPage;
