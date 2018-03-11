import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Login, Register} from '../User';
import {Homepage} from '../Homepage';
import {connect} from 'react-redux';
import Authroute from './Authroute';
import NonAuthroute from './NonAuthroute';
import {Dummy} from '../Dummy';

class Routes extends Component {

    render() {
        const user = this.props.user;

        if (user) {
            return (
                <Switch>
                    <Route component={Dummy} />
                </Switch>
            );
        } else {
            return (
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
}

export default withRouter(connect(mapStateToProps)(Routes));