import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Movies from "~/pages/Movies";
import Series from "~/pages/Series";
import Channels from "~/pages/Channels";

const Routes = () => (
  <>
    <Switch>
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      <Route path="/channels" component={Channels} />
      <Redirect exact from="/" to="/movies" />
    </Switch>
  </>
);

export default Routes;
