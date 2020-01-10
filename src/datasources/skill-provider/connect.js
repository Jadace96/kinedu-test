import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";

const bindMilestoneProvider = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

export { bindMilestoneProvider };