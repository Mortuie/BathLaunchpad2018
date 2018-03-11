import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import axios from 'axios';

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        location: '',
        password: '',
        cpassword: '',
        error: '',
        success: '',
    };

    register = () => {
        axios.post('https://www.charlesanderson.co.uk/launchpad2018/register.php', {
            name: this.state.name,
            email: this.state.email,
            location: this.state.location,
            password: this.state.password,
            cpassword: this.state.cpassword,
        })
        .then(res => {
            console.log(res.data.status);
            console.log(res.data.error);
            if (parseInt(res.status) == 200) {
                this.setState({
                    name: '',
                    email: '',
                    location: '',
                    password: '',
                    cpassword: '',
                    error: '',
                    success: res.data.status,
                });

            } else {
                this.setState({
                    error: res.data.error,
                    success: '',
                });
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Text success>{this.state.success}</Text>
                <Text>{this.state.error}</Text>
                <Input
                    placeholder="name"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                ></Input>
                <Input 
                    placeholder="email"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                ></Input>
                <Input
                    placeholder="postcode"
                    value={this.state.location}
                    onChange={e => this.setState({location: e.target.value})}
                ></Input>
                <Input
                    placeholder="password"
                    type="password"
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                ></Input>
                <Input
                    placeholder="retype password"
                    type="password"
                    value={this.state.cpassword}
                    onChange={e => this.setState({cpassword: e.target.value})}
                ></Input>
                <Button onClick={this.register}>Register</Button>
            </Container>
        );
    }
}

const Text = styled.text`
    color: red;
    font-weight: bold;
    margin-bottom: 12px;

    ${props => props.login && css`
        color: white;
        margin-top: 12px;
    `}

    ${props => props.success && css`
        color: green;
    `}
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
