import React, {Component} from 'react';
import {Routes} from './Routes';
import {Navbar} from './Navbar';
import {Footer} from './Footer';
import styled from 'styled-components';
import img from './images/blur.jpg';

export default class Entrypoint extends Component {

    render() {
        return (
            <Container>
                <Navbar />
                <Routes />
                <Footer />
            </Container>
        );
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;