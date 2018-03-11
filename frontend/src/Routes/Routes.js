import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {Login, Register, Logout} from '../User';
import {Homepage} from '../Homepage';
import {connect} from 'react-redux';
import Authroute from './Authroute';
import NonAuthroute from './NonAuthroute';
import {Dummy} from '../Dummy';
import {View} from '../View';
import {Settings} from '../Settings';
import {Searchresults, Induviduals} from '../Searchresults';

class Routes extends Component {

    render() {
        const user = this.props.user;

        return (
            <Switch>
                <NonAuthroute exact loggedIn={user} component={Homepage} path='/' redirect='/view' />
                <NonAuthroute loggedIn={user} component={Login} path='/login' redirect='/view' />
                <NonAuthroute loggedIn={user} component={Register} path='/register' redirect='/view' />
                <Authroute loggedIn={user} component={View} path='/view' redirect='/' />
                <Authroute loggedIn={user} component={Settings} path='/settings' redirect='/' />
                <Authroute loggedIn={user} component={Induviduals} path='/searchresults/:id' redirect='/' />
                <Authroute loggedIn={user} component={Searchresults} path='/searchresults' redirect='/' />
                <Route component={Logout} path='/logout' />
                <Route path='*' component={Dummy} />      
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
}

export default withRouter(connect(mapStateToProps)(Routes));