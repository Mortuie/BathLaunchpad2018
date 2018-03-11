import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

class Footer extends Component {

    render() {
        console.log(this.props);
        if (this.props.user) { // logged in...
            return (
                <Container>
                    <Box><Link to='/settings' style={{textDecoration: "none"}}><Descriptors>Settings</Descriptors></Link></Box>
                    <Box middle><Link to='/view' style={{textDecoration: "none"}}><Descriptors>View</Descriptors></Link></Box>
                    <Box><Link to='/logout' style={{textDecoration: "none"}}><Descriptors>Logout</Descriptors></Link></Box>
                </Container>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

const Descriptors = styled.div`
    font-weight: bold;
    color: white;
`;

const Box = styled.div`
    width: 33.3%;
    height: 10.3vh;
    background-color: #48ACB1;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.middle && css`
        border-left: 1px solid #333;
        border-right: 1px solid #333;
    `}
`;

const Container = styled.div`
    display: flex;
`;

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
}

export default connect(mapStateToProps)(Footer);