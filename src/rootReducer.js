import { combineReducers } from 'redux';

import { developmentalAreaProviderReducer } from './datasources/developmental-area-provider';

const rootReducer = combineReducers({
  developmentalAreaProviderReducer,
});

export default rootReducer;
