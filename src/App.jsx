import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './component/Main Menu/Menu'; // Import MainMenu component
import Chapter1 from './component/Chapter 1/C1 S1/'; // Import Chapter1 component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route path="/chapter1" component={Chapter1} />
      </Switch>
    </Router>
  );
};

export default App;
