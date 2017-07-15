import { combineReducers } from 'redux';

import globalReducer from './global';
import routingReducer from './routing';

const appReducer = combineReducers({ global: globalReducer, routing: routingReducer });

export default appReducer;
