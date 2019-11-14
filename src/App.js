import React from 'react';
import './App.css';

import List from './components/List/List'
import SendForm from './components/SendForm/SendForm';
import Logo from './components/Logo/Logo';
import Success from './components/Success/Success';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div style={{margin:'auto'}}>
        <Logo /> {/* TODO - Clicking the logo should reset the UI */}
        <div className="card" style={{width:'580px', minHeight:'325px'}}>
          <div className="card-content">
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route exact path="/send">
                <SendForm />
              </Route>
              <Route path="/send/success">
                <Success />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
