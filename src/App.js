import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Submit from './components/Submit';
import Tribe from './components/Tribe';
import Login from './components/Login';
import Home from './components/Home';
import Rate from './components/Rate';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/submit" component={Submit} />
          <Route path="/rate" component={Rate} />
          <Route path="/tribe" component={Tribe} />
        </Switch>
      </div>
    );
  }
}

export default App;
