import React, { Component } from 'react';
import styled, {css} from 'styled-components';

export default class Homepage extends Component {
    
  render() {

    return (
        <Container>
            <Text>Find events near you!</Text>
            <Button onClick={() => this.props.history.push('/login')}>Login</Button>
            <Button left onClick={() => this.props.history.push('/register')}>Register</Button>
        </Container>
    );
  }
}

const Text = styled.text`
    font-family: 'Coda Caption', sans-serif;
    position: absolute;
    top: 120px;
    left: 0px;
    text-align: center;
    color: white;
    font-size: 35px
`;

const Container = styled.div`
    width: 100%;
    height: 91.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    background-color: #48ACB1;
    color: white;
    width: 50%;
    height: 60px;
    font-weight: bold;
    padding: 0 5px;
    border: none;
    margin-top: auto;

    ${props => props.left && css`
        border-left: 1px solid #333;    
    `}

`;