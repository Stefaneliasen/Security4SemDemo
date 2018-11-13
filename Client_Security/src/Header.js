import React from 'react';
import { HeaderUl, HeaderLi } from './my_styled_components';
import { NavLink } from 'react-router-dom';

import { toggleLogin } from './actions/toggleLogin';
import { toggleRegister } from './actions/toggleRegister';

import { handleLogOut } from './actions/refreshToken';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { parseJwt } from './dynamic_functions/parsePayload';



const Header = ({ toggleLogin, toggleRegister, authToken, handleLogOut }) => {
    const payLoad = (authToken ? parseJwt(authToken) : null);
    return (authToken ?
        (
            <HeaderUl>
                <HeaderLi position="a"><NavLink to='/'>Start</NavLink></HeaderLi>
                <HeaderLi position="h" disable>Logged in as {payLoad.userName}</HeaderLi>
                <HeaderLi position="i"><NavLink to='/mysql'>MySQL</NavLink></HeaderLi>
                <HeaderLi position="j"><NavLink onClick={handleLogOut} to='/'>Log Out</NavLink></HeaderLi>
            </HeaderUl>
        ) : (
            < HeaderUl >
                < HeaderLi position="a" >< NavLink exact to='/' >Start</NavLink ></HeaderLi >
                <HeaderLi position="j"><NavLink onClick={toggleLogin} to='/login'>Login</NavLink></HeaderLi>
                <HeaderLi position="i"><NavLink onClick={toggleRegister} to='/register'>Register</NavLink></HeaderLi>
            </HeaderUl >
        )
    )
}

const mapPropsToState = state => ({
    authToken: state.token.authToken
})
const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLogin,
    toggleRegister,
    handleLogOut
}, dispatch)

export default connect(mapPropsToState, mapDispatchToProps)(Header);