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
                            <Card
                                onClick={() => this.props.history.push('/searchresults/' + item.id)}
                            >
                                
                            </Card>
                        );
                    })
                }
            </Container>
        );
    }
}

const Card = styled.div`
    background-color: black;
    margin-bottom: 10px;
    height: 50px;
    width: 100px;
`;

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