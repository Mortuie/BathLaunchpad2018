import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../images/blur.jpg';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from './actions';

class Login extends Component {
    
    state = {
        email: '',
        password: '',
        error: '',
    };

    login = () => {
        axios.post('https://www.charlesanderson.co.uk/launchpad2018/login.php', {
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => {
            console.log(res)
            if (res.status == 200) {
                this.setState({
                    email: '',
                    password: '',
                });
                
            } else {
                this.setState({error: JSON.parse(res.data).status});
            }
        })
        .catch(err => console.log(err));
    }

    render() {

        return (
            <Container>
                <Text>{this.state.error}</Text>
                <Input
                    placeholder='example@example.com'
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                ></Input>
                <Input
                    placeholder='password'
                    type='password' 
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                ></Input>
                <Button onClick={this.login}>Login</Button>
            </Container>
        );
    }
}

const Text = styled.text`
    color: red;
    font-weight: bold;
    margin-bottom: 12px;
`;

const Container = styled.div`
    width: 100%;
    height: 91.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 250px;
    height: 35px;
    background: #FFF;
    border: 1px solid #333;
    margin: 0 0 12px 0;
    padding: 0 5px;
    border-radius: 3px;
    text-align: center;
`;

const Button = styled.button`
    background-color: #48ACB1;
    color: white;
    width: 260px;
    height: 35px;
    padding: 0 5px;
    border: none;
    font-weight: bold;
`;

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch(login()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);