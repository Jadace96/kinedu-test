import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MilestonesPage from '../containers/MilestonesPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MilestonesPage} />
    </Switch>
  );
}

export default Routes;
