import React, { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import config from '../../../modules/CRUD/config';
import GeoCrud from '../../../modules/CRUD';

export const Content = () => (
  <main className="main-content">
    <Switch>
      <Redirect exact from="/" to="/map" />
      <Route path={config.path}>
        <GeoCrud />
      </Route>
    </Switch>
  </main>
);

export default memo(Content);
