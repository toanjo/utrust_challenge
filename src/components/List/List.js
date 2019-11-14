import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUrl } from '../../utils/defaults';
import axios from 'axios';
import ListItem from '../ListItem/ListItem';
import {
  Link
} from "react-router-dom";
import { setAddresses } from '../../actions/list.js';

export default function List() {

  const dispatch = useDispatch();
  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui)

  useEffect(() => {
    if(!list.length) { // Avoid fetching data again
      axios.get(requestUrl)
      .then((response) => dispatch(setAddresses(response.data.result)))
    }
  }, [dispatch, list])  

  return (
    <div>
        <p className="subtitle">
            My Ethereum Addressess
        </p>
        <div className="list">
            {/* TODO - Add a proper loading icon */}
            {ui.loading ? <div style={{height:'160px'}}>Fetching</div> : 
            list.map(address => <ListItem key={address.account} data={address} />)}
        </div>
        <footer className="card-footer" style={{alignItems: "center", borderTop: "none", justifyContent: "space-between"}}>
            <div>Please copy the address from which you wish to send money.
              <p>
                <small>
                  Clicking on an address will copy it to the clipboard.
                </small>
              </p>
            </div>
            <Link to="/send" className="button is-primary" style={{backgroundColor:"#6932D4", marginLeft:"2em"}}>Next</Link>
        </footer>
    </div>
  );
}
