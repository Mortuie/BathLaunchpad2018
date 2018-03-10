import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const Authroute = ({loggedIn, component: Component, redirect: path, ...rest}) => (
    <Route {...rest} render={props => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: path}} />
        ))}
    />
);

export default Authroute;