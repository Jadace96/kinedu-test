import { combineReducers } from 'redux';

import { loaderContainerReducer } from './containers/Loader';
import { developmentalAreaProviderReducer } from './datasources/developmental-area-provider';

const rootReducer = combineReducers({
  loaderContainerReducer,
  developmentalAreaProviderReducer,
});

export default rootReducer;
