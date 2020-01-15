import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './props';

const bindLoaderContainer = (Component) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export { bindLoaderContainer };
