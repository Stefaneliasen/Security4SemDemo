import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Devtools
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import rootReducer from './router_reducer';

const store = createStore(rootReducer, {}, composeWithDevTools());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));