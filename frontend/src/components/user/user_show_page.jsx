import React from "react";
import headshot from '../../images/default_headshot.png';
import { Link } from 'react-router-dom'
// import UserEditFormContainer from './user_edit_form_container'
// ;
class UserShowPage extends React.Component {

  constructor(props){
    super(props)
    this.state ={
    displayEdit: false,
    user: this.props.user
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.submitUser = this.submitUser.bind(this);
    }
  
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleClick(e){
    console.log(this.state)
    if(this.state.displayEdit){
      this.setState({ displayEdit: false });
    } else {
      this.setState({ displayEdit: true});
    }
    
  }

  handleUpdate(e){
    const prevUser = this.props.user;
    const newUser = Object.assign({}, prevUser);
    newUser.bio = e.currentTarget.value; 
    this.setState({user: newUser})
    console.log(this.state)
  }

  submitUser(e){
    this.props.updateUser(this.state.user);
    this.setState({ displayEdit: false });
  }

  render() {
    const { recipes_liked, recipes_created, user, currentUserId, openModalPayload } = this.props;
    if (!recipes_created || !user || !recipes_liked) {
      return null;
    }
    // debugger
    return (
      <div className="show-page-section">
        <div className="profile-container">
            <div className="profile-info">
                  <div className="user-profile-pic">
                    <img className="profile-pic-img" src={headshot} alt="" />
                  </div>

                  <div>
                    <div className="user-handle">{user && <div>{user.handle}</div>}</div>
                    <div  className="edit-button-start"onClick={this.handleClick}>
                      <i className="fa-solid fa-pen"></i>
                    </div>
                  </div>

                  <div className="recipe-count"> {recipes_created.length} recipes</div>

                        {this.state.displayEdit ? (
                          <div>
                            <textarea
                            className="editing-bio"
                              onChange={this.handleUpdate}
                              value={this.state.user ? this.state.user.bio : ""}
                            />
                            <button  className="edit-bio-button" onClick={this.submitUser}>Save</button>
                          </div>
                        ) : (
                          <div className="user-bio">{user.bio}</div>
                        )}

            </div>


              <div className="user-buttons">
                    {currentUserId === user.id ? 
                      <div>
                        <div className="make-a-recipe"
                        onClick={(e)=>openModalPayload({ modal: 'createRecipe', payload: null })}
                        >Create a Recipe</div>
                        <div className="make-meal-plan-button">Make a meal plan</div>
                      </div>
                    : 
                      <div></div>
                    }
              </div>


        </div>



        <div className="created-recipes-index">
          {recipes_created &&
            recipes_created.map((recipe, idx) => (
              <Link to={`/recipes/${recipe.id}`} key={idx}>
                <div className="created-recipe">
                  <img
                    className="user-show-recipe-image"
                    src={recipe.image_url}
                    alt="background-pic"
                  />
                  <div className="user-show-recipe-title">{recipe.title}</div>
                  <div className="edit-button">
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </div>
              </Link>
            ))}
        </div>

      </div>
    );
  }
}

export default UserShowPage;
