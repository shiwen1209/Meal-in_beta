import React from "react";
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom'
import donut from '../../images/donut.png'
import RecipeIndexItem from '../recipes/recipe_index_item';
import dogcake from '../../images/dogcake.jpg';
// import UserEditFormContainer from './user_edit_form_container'
// ;
class UserShowPage extends React.Component {

  constructor(props){
    super(props)
    this.state ={
    recipeDisplay: "createdRecipe",
    displayEdit: false,
    user: this.props.user
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    }
  
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId).then(() => this.setState({ user: this.props.user }))
  }

  handleClick(e){
    console.log(this.state, 'yahear')
    if(this.state.displayEdit){
      this.setState({ displayEdit: false });
    } else {
      this.setState({ displayEdit: true});
    }
    
  }
  handleUpdateClick(e){
    e.preventDefault();
    
    this.props.openModalPayload({name: "updateRecipe", payload: e.target.parentNode.id});
  }

  handleUpdate(e){
    const prevUser = this.props.user;
    const newUser = Object.assign({}, prevUser);
    newUser.bio = e.currentTarget.value; 
    this.setState({user: newUser})
    // console.log(this.state, "hhandleupdate")
  }

  submitUser(e){
    console.log('submituser', this.state)
    this.props.updateUser(this.state.user);
    this.setState({ displayEdit: false });
  }

  render() {
    console.log('props', this.props)
    console.log('state', this.state)
    const { recipes_liked, recipes_created, user, currentUserId, openModalPayload } = this.props;
    if (!recipes_created || !user || !recipes_liked) {
      return null;
    }
    

    return (
      <div className="show-page-section">
        <div className="profile-container">
            <div className="profile-info">
                  <div className="user-profile-pic">
                    <img className="profile-pic-img" src={headshot} alt="" />
                  </div>

                  <div className="user-info">
                    <div>
                      <div className="user-handle">{user && <div>{user.handle}</div>}  
                      <div onClick={this.handleClick} className="edit-bio-icon">
                        <i className="fa-solid fa-pen"></i>
                      </div></div>
                    </div>
                    <div className="recipe-count"> {recipes_created.length} posted recipes</div>
                    <div className="recipe-count"> {recipes_liked.length} liked recipes</div>
                    <div id="testinggg">
                          {this.state.displayEdit ? (
                            <div className="edit-profile-area">
                              <textarea
                              className="editing-bio"
                                onChange={this.handleUpdate}
                                value={ this.state.user.bio}
                              />
                     
                              <button  className="edit-bio-button" onClick={this.submitUser}>Save</button>
                            </div>
                          ) : (
                            <div className="user-bio">Bio: {user.bio}</div>
                          )}
                    </div>


                  </div>
            </div>
 
       
                    {currentUserId === user.id ? 
              <div className="user-buttons">
                        <button className="make-a-recipe"
                        onClick={(e)=>openModalPayload({name: "createRecipe"})}
                        >Create a Recipe</button>
                        <Link to={`/mymealplans/${currentUserId}`}>
                          <button className="make-meal-plan-button">Make a meal plan</button>
                        </Link>
                      </div>
                    : 
                      <div></div>
                    }
        </div>


        <div className="recipe-tabs">
                <div className={this.state.recipeDisplay === "createdRecipe" ? "tab-active" : "tab-inactive"}>
                    <h1 onClick={(e) => this.setState({recipeDisplay: "createdRecipe"})}>My posted recipes</h1>
                </div>
          <div className={this.state.recipeDisplay === "likedRecipes" ? "tab-active" : "tab-inactive"}>
                  <h1 onClick={(e) => this.setState({recipeDisplay: "likedRecipes"})}>My liked recipes</h1>
                </div>
            <div>
              <h1 onClick={(e) => this.setState({ recipeDisplay: "likedRecipes" })}>My mealplans</h1>

            </div>
        </div>

        {this.state.recipeDisplay === "createdRecipe" ?
        <div className="created-recipes-index">
          {recipes_created &&
            recipes_created.map((recipe, idx) => (
              <Link to={`/recipes/${recipe.id}`} key={idx}>
                <div className="created-recipe">
                  {recipe.image_url !== '' ?
                  <img
                    className="user-show-recipe-image"
                    src={recipe.image_url}
                    // alt="background-pic"
                  />
                  :
                  <img className="user-show-recipe-image"
                    src={dogcake}
                    // alt="background-pic"
                  />
                  
                }
                {/* (e)=>openModalPayload("updateRecipe" ) */}
                  <div className="user-show-recipe-title">{recipe.title}</div>
                  <button className="edit-button" id={recipe.id} onClick={this.handleUpdateClick}>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </div> 
              </Link>
            ))}
        </div> 
        : 
        <div className="created-recipes-index">
          {recipes_liked &&
            recipes_liked.map((recipe, idx) => ( 
            <Link to={`/recipes/${recipe.id}`} key={idx}>
              <div className="created-recipe">
                <img
                  className="user-show-recipe-image"
                  src={recipe.image_url}
                  // alt="background-pic"
                />
                <div className="user-show-recipe-title">{recipe.title}</div>
              </div> 
            </Link>
            ))}
        </div>}
        

      </div>
    );
  }
}

export default UserShowPage;
