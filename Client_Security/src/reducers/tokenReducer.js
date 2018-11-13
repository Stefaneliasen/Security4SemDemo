import { HANDLE_LOGIN, HANDLE_LOGOUT } from '../actions/refreshToken';

const initialState = {
    authToken: window.localStorage.getItem('auth')
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case HANDLE_LOGIN:
            return {
                ...state,
                authToken: window.localStorage.getItem('auth')
            }
        case HANDLE_LOGOUT:
        window.localStorage.removeItem('auth');
        return {
            ...state,
            authToken: null
        }
        default:
            return state;
    }
}