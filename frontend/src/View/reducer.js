import {
    ADD_EVENTS,
} from './constants';

const initialState = {
    events: null,
};

export default function viewReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENTS:
            return {
                ...state,
                events: action.events,
            };
        default:
            return state;
    }
}