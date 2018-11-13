import { combineReducers } from 'redux';

import login from './reducers/loginReducer';
import register from './reducers/registerReducer'
import token from './reducers/tokenReducer';

const rootReducer = combineReducers({
    login,
    register,
    token,
})

export default rootReducer;