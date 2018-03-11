import {combineReducers} from 'redux';
import {userReducer} from '../User';
import {viewReducer} from '../View';

export default combineReducers({
    userReducer,
    viewReducer,
});