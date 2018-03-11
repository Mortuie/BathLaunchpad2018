import {
    LOGIN,
    LOGOUT
} from './constants';
import axios from 'axios';

export function login() {
    return {
        type: LOGIN,
        user: true,
    };
}

export function logout() {
    return {
        type: LOGOUT,
        user: false,
    };
}
