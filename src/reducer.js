
import { NAVIGATE } from './constants';

export const INITIAL_STATE = {
    uri: '',
    etag: null,
};

export function routerReducer(state = INITIAL_STATE, action) {
    var { type, payload } = action;
    switch (type) {
        case NAVIGATE:  return navigate(state, payload);
        default:        return state;
    }
}

export function navigate(state, payload) {
    var { uri, etag } = payload;
    return { ...state, uri, etag };
}
