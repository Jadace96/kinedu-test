import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import DevelopmentalAreasPage from '../containers/DevelopmentalAreasPage';
import NotFoundPage from '../containers/NotFoundPage';

function Routes({ configProps }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <DevelopmentalAreasPage {...props} {...configProps} />}
      />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}


Routes.propTypes = {
  configProps: PropTypes.object,
};
export default Routes;
