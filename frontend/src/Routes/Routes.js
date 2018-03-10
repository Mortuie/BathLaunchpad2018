import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Login} from '../User';
import {connect} from 'react-redux';
import Authroute from './Authroute';
import NonAuthroute from './NonAuthroute';
import {Dummy} from '../Dummy';

class Account extends Component {

    render() {
        console.log(this.props);
        const user = this.props.user;
        return (
            <Switch>
                <NonAuthroute path='/' loggedIn={user} component={Login} redirect='/homepage' />
                <Authroute path='/homepage' loggedIn={user} component={Dummy} redirect='/' />
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
}

export default withRouter(connect(mapStateToProps)(Account));