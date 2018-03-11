import React, {Component} from 'react';
import {logout} from './actions';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Logout extends Component {

    componentWillMount() {
        this.props.logout();    
    }

    render() {
        console.log(this.props);
        return (
            <Container>
                You have been logged out!
            </Container>
        );
    }
}

const Container = styled.div`
    height: 80.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`;

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);