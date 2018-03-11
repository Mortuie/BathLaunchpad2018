import {
    ADD_EVENTS
} from './constants';

export function adding_events(events) {
    return {
        type: ADD_EVENTS,
        events,
    };
}