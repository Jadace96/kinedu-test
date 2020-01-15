import { SHOW_LOADER } from './constants';

const initialState = {
  showLoader: false,
};

function loaderContainerReducer(state = initialState, payload) {
  switch (payload.type) {
    case SHOW_LOADER: {
      return { ...state, showLoader: payload.showLoader };
    }

    default:
      return state;
  }
}

export { loaderContainerReducer };
