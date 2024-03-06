import React from 'react';
import Sodaimage from './images/coke.jpg';

const Soda = () => {
  return (
    <div>
      <h2>Soda</h2>
      <img src={Sodaimage} alt="Soda" style={{width: '200px', height: '200px'}}/>
    </div>
  );
};

export default Soda;

