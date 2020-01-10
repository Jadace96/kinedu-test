import { fromJS } from "immutable";

import { ON_SUCCESS_FETCH_MILESTONES } from "./constants";

export const initialState = fromJS({
  milestones: null
});

function milestoneProviderReducer(state = initialState, payload) {
  switch (payload.type) {
    case ON_SUCCESS_FETCH_MILESTONES:
      debugger;
      return state.set("milestones", payload.data);

    default:
      return state;
  }
}

export default milestoneProviderReducer;
