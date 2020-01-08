import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";

import rootReducer from "../containers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(reduxSaga()));
