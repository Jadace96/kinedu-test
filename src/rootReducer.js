import { combineReducers } from "redux";

import { skillProviderReducer } from "./datasources/skill-provider";

const rootReducer = combineReducers({
  skillProviderReducer
});

export default rootReducer;
