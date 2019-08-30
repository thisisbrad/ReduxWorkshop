import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
      </Router>
    </div>
  );
}

export default App;
