import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../screens/Home';
import PageNotFound from '../screens/PageNotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/404'>
          <PageNotFound />
        </Route>
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}
