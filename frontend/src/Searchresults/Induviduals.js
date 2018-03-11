import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {connect} from 'react-redux';

class Induviduals extends Component {

    state = {
        event: null,
    };

    getCurrentEvent = (id) => {
        this.props.events.map(item => {
            if (item.id == id) {
                this.setState({event: item});
            }
        });
    }


    render() {
        var id = this.props.match.params.id;
        console.log("state", this.state.event);
        if (!this.state.event) {
            this.getCurrentEvent(id);
        }

        if (this.state.event) {
            return (
                <Container>
                    <Image src={this.state.event.largeimageurl}></Image>
                    <Box>
                    
                        <Title>{this.state.event.eventname}</Title>
                        <Price>{this.state.event.entryprice}</Price>
                        <Text>{this.state.event.date}</Text>
                        <Text time>{"From: " + this.state.event.openingtimes.doorsopen + " to: " + this.state.event.openingtimes.doorsclose}</Text>
                        <Text>{this.state.event.description}</Text>
                        <Link href={this.state.event.link} target='_blank'>{this.state.event.link}</Link>
                    
                    </Box>
                </Container>
            );
        } else { // no event
            return (
                <div></div>
            );
        }
    }
}

const Box = styled.div`
    height: 90vh;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`;

const Text = styled.text`
    text-align: center;
    font-weight: bold;
    color: black;

    ${props => props.time && css`
        color: red;
    
    `}
`;

const Link = styled.a`
    color: blue;
    text-align: center;
    font-weight: bold;
`;

const Price = styled.text`
    margin-top: 3px;
    font-weight: bold;
    font-size: 21px;
    color: green;
`;

const Title = styled.text`
    font-size: 25px;
    font-weight: bold;
    padding: 3px;
    padding-top:10px;
    text-align: center;
    color: #48ACB1;
`;

const Image = styled.img`
    width: 100%;
    margin-bottom: 5px;
`;

const Container = styled.div`
    height: 80.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`;

const mapStateToProps = state => {
    return {
        events: state.viewReducer.events,
    };
}

export default connect(mapStateToProps)(Induviduals);