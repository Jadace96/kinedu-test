
/**
 * Asynchronously loads the component for Developmental areas
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
