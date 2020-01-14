import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DevelopmentalAreasPage from '../containers/DevelopmentalAreasPage';
import NotFoundPage from '../containers/NotFoundPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={DevelopmentalAreasPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;
