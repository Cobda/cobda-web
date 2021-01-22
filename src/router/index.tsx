import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../screens/Home';
import PageNotFound from '../screens/PageNotFound';
import ProductList from '../screens/ProductList';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product-list">
          <ProductList />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
