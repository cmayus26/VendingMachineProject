
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import VendingMachineImage from './images/vendingmachine.jpeg';
import PotatoChips from './PotatoChips';
import Soda from './Soda';
import Sardines from './Sardines';

const VendingMachine = () => {
  return (
    
    <div>
      <h1>Vending Machine</h1>
      <img src={VendingMachineImage} alt="Vending Machine" />
      <ul>
        <li>
          <Link to="/chips">Potato Chips</Link>
        </li>
        <li>
          <Link to="/coke">Soda</Link>
        </li>
        <li>
          <Link to="/sardines">Sardines</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/chips"><PotatoChips /></Route>
        <Route exact path="/coke"><Soda /></Route>
        <Route exact path="/sardines"><Sardines /></Route>
      </Switch>
    </div>
  );
};

export default VendingMachine;
