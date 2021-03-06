import { combineReducers } from 'redux';
import msgReducer from './messages.js';
import { connectRouter } from 'connected-react-router'
import chatReducer from './chatReducer.js';

export default (history) => combineReducers({ 
    router: connectRouter(history),
    msgReducer,
    chatReducer,
});
