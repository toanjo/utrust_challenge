import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import {
  Link
} from "react-router-dom";

export default function List() {

  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui) 

  return (
    <div>
        <p className="subtitle">
            My Ethereum Addressess
        </p>
        <div className="list">
            {ui.loading && <div style={{height:'160px'}}>Fetching</div>}
            {ui.error && <div style={{height:'160px'}}>Error</div>}
            {list.length > 0 && list.map(address => <ListItem key={address.account} data={address} />)}
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
