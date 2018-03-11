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

                </Container>
            );
        } else { // no event
            return (
                <div></div>
            );
        }
    }
}

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