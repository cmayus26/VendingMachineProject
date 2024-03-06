// Routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import PotatoChips from './PotatoChips';
import Soda from './Soda';
import Sardines from './Sardines';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={VendingMachine} />
      <Route exact path="/chips"><PotatoChips /></Route>
      <Route exact path="/coke"><Soda /></Route>
      <Route exact path="/sardines"><Sardines /></Route>
    </Switch>
  );
};

export default Routes;
