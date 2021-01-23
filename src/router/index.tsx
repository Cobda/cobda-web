import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../screens/Home";
import PageNotFound from "../screens/PageNotFound";
import SignUp from "../screens/SignUp";
import RegistrationSuccessForm from "../screens/RegistrationSuccess";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/registration-success">
          <SignUp />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
