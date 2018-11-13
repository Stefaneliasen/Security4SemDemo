import { TOGGLE_LOGIN } from '../actions/toggleLogin';

const initialState = {
    toggleLogin: false,
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case TOGGLE_LOGIN:
            return {
                ...state,
                toggleLogin: !state.toggleLogin
            };
        default:
            return state;
    }
}