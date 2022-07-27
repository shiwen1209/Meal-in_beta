import React from "react";

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.recipe;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, closeModal, errors } = this.props;
    processForm(this.state).then(() => {
      if (errors.length === 0) {
        closeModal();
      }
    });
  }

  handleUpdate(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(
        <div className="createForm">
            <div>
              YO
            </div>
        </div>
    )
  }
}

export default EditRecipeForm;
