import { combineReducers } from 'redux';

import globalReducer from './global';

const appReducer = combineReducers({ global: globalReducer });

export default appReducer;
