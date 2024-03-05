import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';



const App = () => {
  return (
    <Router>
      <main className="App">
        <Route exact path="/" component={VendingMachine} />
      </main>
    </Router>
  );
};

export default App;

