import {
    LOGIN,
    LOGOUT,
} from './constants';

const initialState = {
    user: false,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.user, email: action.email};
        case LOGOUT:
            return {...state, user: false, email: null};
        default:
            return state;
    };
}