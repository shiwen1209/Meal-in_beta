import React from 'react';
import { withRouter } from 'react-router-dom';
// import loginCss from '../../css/login.css'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    demologin(e){
        e.preventDefault();
        this.props.demo()
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
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
            <div className="login-section">
                
                <form onSubmit={this.handleSubmit}>
                    <div className='login-info'>
                        <div className="login-header">Log In</div>
                         <div className="login-page-text-login">Email</div>
                        <input className="login-box" type="text"
                            value={this.state.email}
                            onChange={this.update('email')}

                        />
                        <br />
                        <div className="login-page-text-password">Password</div>
                        <input className="password-box"type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
        
                        />
                        <br />
                        <input className="login-submit"type="submit" value="Submit" />
                        <button onClick={e => this.demologin(e)} className="login-submit">Demo User</button>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);