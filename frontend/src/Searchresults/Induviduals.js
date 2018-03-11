import React, {Component} from 'react';
import styled from 'styled-components';
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
                    <Title>{this.state.event.eventname}</Title>
                    <Price>{this.state.event.entryprice}</Price>
                    <text>{this.state.event.date}</text>
                    <text>{"From: " + this.state.event.openingtimes.doorsopen + " to: " + this.state.event.openingtimes.doorsclose}</text>
                    <text>{this.state.event.description}</text>
                    <Link href={this.state.event.link} target='_blank'>{this.state.event.link}</Link>
                </Container>
            );
        } else { // no event
            return (
                <div></div>
            );
        }
    }
}

const Link = styled.a`
    color: white;
`;

const Price = styled.text`
    margin-top: 3px;
    font-weight: bold;
    font-size: 21px;
`;

const Title = styled.text`
    font-size: 25px;
    font-weight: bold;
    padding: 3px;
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
`;

const Container = styled.div`
    height: 80.5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const mapStateToProps = state => {
    return {
        events: state.viewReducer.events,
    };
}

export default connect(mapStateToProps)(Induviduals);