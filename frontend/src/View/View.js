import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default class View extends Component {

    state = {
        postcode: '',
        radius: '',
    };

    search = () => {
        axios.post('https://www.charlesanderson.co.uk/launchpad2018/view.php', {
            postcode: this.state.postcode,
            radius: this.state.radius,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    render() {
        return (    
            <Container>
                <Input
                    placeholder='Search a new postcode: BA25JY'
                    value={this.state.postcode}
                    onChange={e => this.setState({postcode: e.target.value})}
                ></Input>
                <Input
                    placeholder='Enter a radius (miles)'
                    type='number'
                    value={this.state.radius}
                    onChange={e => this.setState({radius: e.target.value})}
                ></Input>
                <Button onClick={this.search}>Search</Button>
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

const Text = styled.text`
    color: white;
    font-weight: bold;
`;


const Container = styled.div`
    height: 80.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;