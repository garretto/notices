import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Toast from './containers/Toast'

import Home from './pages/Home'
import LowerCase from './pages/LowerCase'
import UpperCase from './pages/UpperCase'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/"><img className="App-logo" alt="logo" src={logo} /></Link>
          </header>
          <div className="App-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/lowercase" component={LowerCase} />
              <Route path="/uppercase" component={UpperCase} />
            </Switch>
            <Toast />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
