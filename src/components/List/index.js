import React from 'react';
import { useSelector } from 'react-redux';
import {
  useHistory
} from "react-router-dom";

import { Title, Button } from '../../styles/common';
import { ListElement, Footer, Fallback } from './styles';

import ListItem from '../ListItem';

export default function List() {

  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui) 
  const history = useHistory();

  return (
    <div>
        <Title>
            My Ethereum Addressess
        </Title>
        <ListElement>
            {ui.loading && <Fallback>Fetching Data...</Fallback>}
            {ui.error && <Fallback error>Could not fetch data from Etherscan API :(</Fallback>}
            {list.length > 0 && list.map(address => <ListItem key={address.account} data={address} />)}
        </ListElement>
        <Footer>
            <div>Please copy the address from which you wish to send money.
              <p>
                {!ui.copied ? <small>
                  Clicking on an address will copy it to the clipboard.
                </small> : <span style={{color:'#6932D4'}}>Address copied to clipboard!</span>}
              </p>
            </div>
            <Button id="next-button" onClick={() => history.replace("/send")}>Next</Button>
        </Footer>
    </div>
  );
}
