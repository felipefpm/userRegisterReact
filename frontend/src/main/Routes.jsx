import React from "react";
import { Switch, Route, Redirect } from "react-router";

import UserCrud from "../components/user/UserCrud";
import home from "../components/home/home";

export default props => (
  <Switch>
    <Route exact path="/" component={home} />
    <Route path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
