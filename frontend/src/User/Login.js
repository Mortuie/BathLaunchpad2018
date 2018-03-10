import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux';
import {login} from './actions';

class Login extends Component {
    
  render() {

    const response = (res) => {
        this.props.loginUser(res);
    }

    const componentClicked = () => {
        console.log("Trying to login");
    }

    return (
        <div>
            <FacebookLogin 
                appId="2018495705065023"
                autoLoad={true}
                fields="name, email, picture"
                scope="public_profile,user_location,user_hometown"
                onClick={componentClicked}
                callback={response}
            />
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (user) => dispatch(login(user)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);