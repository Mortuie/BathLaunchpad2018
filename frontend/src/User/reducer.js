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
            return {...state, user: true};
        case LOGOUT:
            return {...state, user: false};
        default:
            return state;
    };
}