import { combineReducers } from "redux";

import { milestoneProviderReducer } from "./datasources/milestone-provider";

const rootReducer = combineReducers({
  milestoneProviderReducer
});

export default rootReducer;
