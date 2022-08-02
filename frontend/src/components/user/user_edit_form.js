import React from 'react';

class EditUserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.currentUser.id,
            bio: ''
        
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[bio]', this.state.currentUser.bio);
        this.props.updateUser(this.state.currentUser.id);
    }

    update(property){
        return e => this.setState({ [property]: e.target.value })
    }

    render(){
        return (
            <div className="bio-edit-container">
                <form className="bio-edit-form" onSubmit={this.handleSubmit}>
                    <div className="bio-input">LOL
                        <input type="text" value={this.state.bio} onChange={this.update("bio")}/>
                    </div>
                </form>
            </div>
        )
    }





}

export default EditUserForm;