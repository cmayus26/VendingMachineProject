
import React from 'react';
import { Link } from 'react-router-dom';
import VendingMachineImage from './images/vendingmachine.jpeg';

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <img src={VendingMachineImage} alt="Vending Machine" style={{width: '200px', height: '300px'}} />
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
    </div>
  );
};

export default VendingMachine;
