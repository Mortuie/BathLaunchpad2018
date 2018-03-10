import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Login} from '../User';

class Account extends Component {

    render() {
        return (
            <Switch>
                <Route path='/' component={Login} />
            
            </Switch>
        );
    }
}

export default withRouter(Account);