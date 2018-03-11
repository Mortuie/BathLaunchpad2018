import {
    LOGIN,
    LOGOUT
} from './constants';
import axios from 'axios';

export function login(email) {
    return {
        type: LOGIN,
        user: true,
        email,
    };
}

export function logout() {
    return {
        type: LOGOUT,
        user: false,
    };
}
