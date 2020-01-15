import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './props';

const bindDevelopmentalAreaProvider = (Component) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);


export { bindDevelopmentalAreaProvider };
