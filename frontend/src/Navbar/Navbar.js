import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import icon from '../images/icon.png';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    render() {
         return (
            <Wrapper>
                <Link to="/">
                    <Image src={icon} width="50px" height="50px"></Image>
                </Link>
            </Wrapper>
        );
    }
}

const Image = styled.img`
    width: 8.5vh;
    height: 8.5vh;
`;

const Wrapper = styled.div`
    width: 100%;
    background-color: #48ACB1;
    text-align: center;
`;

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(Navbar);