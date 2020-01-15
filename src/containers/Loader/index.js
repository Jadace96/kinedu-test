import { bindLoaderContainer } from './container/connect';
import LoaderComponent from './components/Loader';
import { loaderContainerReducer } from './container/reducer';
import * as actions from './container/actions';

export { loaderContainerReducer, bindLoaderContainer, actions };
export default bindLoaderContainer(LoaderComponent);
