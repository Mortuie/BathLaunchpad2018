import React, {Component} from 'react';
import styled from 'styled-components';

export default class Settings extends Component {

    render() {
        return (
            <Container>
                <Input 
                    placeholder="Postcode"
                ></Input>
                <Button>Set new postcode</Button>
                <Input  
                    placeholder="Old Password"
                ></Input>
                <Input
                    placeholder="New Password"
                ></Input>
                <Button>Set new password</Button>

            </Container>
        );
    }
}

const Button = styled.button`
    background-color: #48ACB1;
    color: white;
    width: 260px;
    height: 35px;
    padding: 0 5px;
    border: none;
    font-weight: bold;
    margin-bottom: 12px;
`;

const Input = styled.input`
    width: 250px;
    height: 35px;
    background: #FFF;
    border: 1px solid #333;
    padding: 0 5px;
    border-radius: 3px;
    text-align: center;
`;

const Container = styled.div`
    height: 80.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;