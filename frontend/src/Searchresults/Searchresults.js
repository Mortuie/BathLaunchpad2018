import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {connect} from 'react-redux';

class Searchresults extends Component {

    render() {
        console.log(this.props);
        return (
            <Container>
                <MTop>
                {
                    (this.props.events).map(item => {
                        return (
                            <Card style={{backgroundImage: "url(" + item.largeimageurl + ")", backgroundRepeat: 'no-repeat'}}
                                onClick={() => this.props.history.push('/searchresults/' + item.id)}
                            >
                            <BackgroundBox>
                                <Text>{item.eventname}</Text>
                                <ContainerText>
                                    <Text left>{item.date}</Text>
                                    <Text right>{item.entryprice}</Text>
                                </ContainerText>
                            </BackgroundBox>
                            </Card>
                        );
                    })
                }
                </MTop>
            </Container>
        );
    }
}

const MTop = styled.div`
    margin-top: 920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerText = styled.div`
    margin-top: 90px
`;

const BackgroundBox = styled.div`
    background-color: #333;
    opacity: 0.7;
    width: 94%;
    height: 94%;
    padding: 3%;
`;

const Text = styled.text`
    color: white;
    font-weight: bold;
    min-height: 60px;

    ${props => props.right && css`
        float: right;
        width: 67%;
        min-height: 20px;
        max-height: 20px;
        overflow: hidden;
        text-align: right;
    `}

    ${props => props.left && css`
        min-height: 20px;
        max-height: 20px;
        float: left;
        width: 33%;
        height: 20px;
    `}
`;

const Image = styled.img`
    height: 100%;
`;

const Card = styled.div`
    background-color: black;
    margin-top: 12px;
    height: 160px;
    width: 90%;
`;

// make it scrollable....
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    height: 80.5vh;
`;


const mapStateToProps = state => {
    return {
        events: state.viewReducer.events,
    };
}

export default connect(mapStateToProps)(Searchresults);