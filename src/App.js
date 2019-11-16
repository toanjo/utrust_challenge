import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Switch,
  Route
} from "react-router-dom";

import { requestUrl } from './utils/defaults';
import { setAddresses, handleError } from './actions/actions';
import './App.css';

import List from './components/List/List'
import SendForm from './components/SendForm/SendForm';
import Logo from './components/Logo/Logo';
import Success from './components/Success/Success';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      axios.get(requestUrl)
      .then((response) => dispatch(setAddresses(response.data.result)))
      .catch(() => dispatch(handleError()))
  }, [dispatch]) 

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
