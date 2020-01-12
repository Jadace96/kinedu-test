import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DevelopmentalAreasPage from '../containers/DevelopmentalAreasPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={DevelopmentalAreasPage} />
    </Switch>
  );
}

export default Routes;
