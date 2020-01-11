import { fromJS } from "immutable";

import { ON_SUCCESS_FETCH_SKILL } from "./constants";

export const initialState = fromJS({
  skills: null
});

function skillProviderReducer(state = initialState, payload) {
  switch (payload.type) {
    case ON_SUCCESS_FETCH_SKILL:
      console.log(payload.data);
      return state.set("skills", payload.data);

    default:
      return state;
  }
}

export default skillProviderReducer;
