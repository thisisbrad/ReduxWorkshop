import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Header from './components/header';
import Home from './components/home';
import Services from './components/services';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
