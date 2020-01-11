import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './props';

const bindSkillProvider = (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);

export { bindSkillProvider };
