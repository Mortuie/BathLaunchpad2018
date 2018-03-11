import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Searchresults extends Component {

    render() {
        console.log(this.props);
        return (
            <Container>
                {
                    (this.props.events).map(item => {
                        return (
                            <div
                                onClick={() => this.props.history.push('/searchresults/' + item.id)}
                            >{item.eventname}</div>
                        );
                    })
                }
            </Container>
        );
    }
}

// make it scrollable....
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

export default connect(mapStateToProps)(Searchresults);