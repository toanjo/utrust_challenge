import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem';
import {
  Link
} from "react-router-dom";

import { ListElement, Footer } from './styles';
import { Title } from '../../styles/common';

export default function List() {

  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui) 

  return (
    <div>
        <Title>
            My Ethereum Addressess
        </Title>
        <ListElement>
            {ui.loading && <div style={{height:'160px'}}>Fetching</div>}
            {ui.error && <div style={{height:'160px'}}>Error</div>}
            {list.length > 0 && list.map(address => <ListItem key={address.account} data={address} />)}
        </ListElement>
        <Footer>
            <div>Please copy the address from which you wish to send money.
              <p>
                <small>
                  Clicking on an address will copy it to the clipboard.
                </small>
              </p>
            </div>
            <Link to="/send" className="button">Next</Link>
        </Footer>
    </div>
  );
}
