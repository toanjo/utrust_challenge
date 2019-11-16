import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {
  Switch,
  Route
} from "react-router-dom";

import { requestUrl } from './utils/defaults';
import { setAddresses, handleError } from './actions/actions';
import GlobalStyle from './styles/global';

import List from './components/List';
import SendForm from './components/SendForm';
import Logo from './components/Logo';
import Success from './components/Success';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
      axios.get(requestUrl)
      .then((response) => dispatch(setAddresses(response.data.result)))
      .catch(() => dispatch(handleError()))
  }, [dispatch]) 

  return (
    <>
      <div className="App">
        <main>
          <Logo /> {/* TODO - Clicking the logo should reset the UI */}
          <div className="card">
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
        </main>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
