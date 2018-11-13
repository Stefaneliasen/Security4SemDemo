import { TOGGLE_REGISTER } from '../actions/toggleRegister';

const initialState = {
    toggleRegister: false,
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case TOGGLE_REGISTER:
            return {
                ...state,
                toggleRegister: !state.toggleRegister
            }
        default:
            return state;
    }
}