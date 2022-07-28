import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import CreateRecipeModal from "./recipes/create_recipe_container";
import UpdateRecipeModal from "./recipes/update_recipe_container";

class Modal extends React.Component{
  constructor(props)
  {
    super(props)
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event){
    if (event.key === "Escape") {
      this.props.hideModal();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render()
  {

    if (!this.props.modals) {
      return null;
    }
    let component;
    switch (this.props.modals.name) {
      //this code could be refactored to be significantly more modular and DRY
      case 'createRecipe':
        component = <CreateRecipeModal/>;
        break;
      case 'updateRecipe': 
      component = <UpdateRecipeModal recipeId={this.props.modals.payload}/>;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.props.hideModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modals: state.modal
  }
};

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);