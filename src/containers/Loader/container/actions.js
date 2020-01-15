import { SHOW_LOADER } from './constants';

export const onShowLoader = (showLoader = false) => ({
  type: SHOW_LOADER,
  showLoader,
});
