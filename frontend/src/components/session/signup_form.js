import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <div className="signup-header">Sign Up</div>
                        <div className="email-text">Email</div>
                        <input  id="boxbox"type="text"
                            value={this.state.email}
                            onChange={this.update('email')}

                        />
                           <div className="username-text">Username</div>
                        <input id ="boxbox" type="text"
                            value={this.state.handle}
                            onChange={this.update('handle')}

                        />
                           <div className="pass-text">Password</div>
                        <input id="boxbox"type="password"
                            value={this.state.password}
                            onChange={this.update('password')}

                        />
                           <div className="confirm-pas-text">Confirm password</div>
                        <input id="boxbox"type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                        />
                        
                        <input className="signup-submit" type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);
