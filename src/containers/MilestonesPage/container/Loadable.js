
/**
 * Asynchronously loads the component for Milestones
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
