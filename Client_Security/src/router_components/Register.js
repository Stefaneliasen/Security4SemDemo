import React, { Component } from 'react';
import { OuterContainer, FormContainer, Form, FormBlock, CenterBlock, Span, StartPageWrapper } from './my_styled_components';
import Authorization from '../rest/Authorization';
import Spinner from '../loader/Spinner';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { toggleRegister } from '../actions/toggleRegister';

class Register extends Component {
    state = {
        user: {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
        },
        validationPassword: "",
        //Validation
        messageToggle: false,
        guiMessage: "",
        message: "",
        loader: false
    }


    checkProperties = (user) => {
        for (let key in user) {
            if (user[key] === "") {
                return false;
            }
        }
        return true;
    }

    handleInputChange = (e) => {
        const target = e.target;
        if (target.id) {
            const { user } = this.state;
            user[target.id] = target.value;
            this.setState({ user, })
        } else {
            this.setState({ validationPassword: target.value })
        }
    }

    handleInputClick = (e) => {
        e.preventDefault();
        const { user, validationPassword } = this.state;
        // For now we don't have a backend call to catch errors, so we do plain validation from frontend.
        if (this.checkProperties(user) === false) {
            // Error if it does not match
            this.setState({
                messageToggle: true,
                message: "Please type in all fields to create a user"
            })
        } else if (user.password === validationPassword) {
            this.setState({
                loader: true,
                message: "",
                messageToggle: false
            }, async () => {
                const response = await Authorization.register(user);
                this.setState({
                    loader: false,
                    guiMessage: response
                }, () => {
                    this.props.toggleRegister();
                })
            })
        } else {
            // Error if it does not match criterias
            this.setState({
                messageToggle: true,
                message: "Error happened! passwords does not match, please try again"
            })
        }
    }

    render() {
        const { firstName, lastName, email, userName, password } = this.state.user;
        const { validationPassword, messageToggle, guiMessage, message, loader } = this.state;
        return (
            <div>
                <StartPageWrapper>
                    <h1>{guiMessage}</h1>
                </StartPageWrapper>
                <OuterContainer toggle={this.props.toggle}>
                    <FormContainer>
                        <Form>
                            <Span onClick={this.props.toggleRegister}>X</Span>
                            <h2 style={{ textAlign: 'center' }}>Register</h2>
                            {messageToggle ? (<p style={{ textAlign: 'center', fontSize: '20px' }}>{message}</p>) : null}
                            {loader ? (<Spinner />) : null}
                            <FormBlock><label>First Name:</label><input type="text" placeholder="Please type in your first name" id="firstName" value={firstName} onChange={this.handleInputChange} /></FormBlock>
                            <FormBlock><label>Last Name:</label><input type="text" placeholder="Please type in your last name" id="lastName" value={lastName} onChange={this.handleInputChange} /></FormBlock>
                            <FormBlock><label>Email:</label><input type="text" placeholder="Please type in your email" id="email" value={email} onChange={this.handleInputChange} /></FormBlock>
                            <FormBlock><label>Username:</label><input type="text" placeholder="Please type in your username" id="userName" value={userName} onChange={this.handleInputChange} /></FormBlock>
                            <FormBlock><label>Password:</label><input type="password" placeholder="Please type in your password" id="password" value={password} onChange={this.handleInputChange} /></FormBlock>
                            <FormBlock><label>Retype Password:</label><input type="password" placeholder="Please type in your password" value={validationPassword} onChange={this.handleInputChange} /></FormBlock>
                            <CenterBlock><input style={{ height: '40px' }} type="submit" value="Register" onClick={this.handleInputClick} /></CenterBlock>
                        </Form>
                    </FormContainer>
                </OuterContainer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    toggle: state.register.toggleRegister
})

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleRegister,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);