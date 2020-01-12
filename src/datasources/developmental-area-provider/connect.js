import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './props';

const bindDevelopmentalAreaProvider = (Component) => {
  const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
  return connectedComponent;
};

export { bindDevelopmentalAreaProvider };
