import React from 'react';
import { useSelector } from 'react-redux';
import {
  useHistory
} from "react-router-dom";

import { Title } from '../../styles/common';
import { Container, Amount, Address, Label, Divider } from './styles';

export default function Success() {

  const transaction = useSelector(state => state.lastTransaction)
  const history = useHistory();

  if (!transaction) { // Refreshing the success page leads back to the list
    history.replace("/");
    return null;
  }
  return (
    <div>
        <Title>
            Transaction Complete
        </Title>
        <Container>
          <div style={{textAlign:'center'}}>
              <img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png" alt="Transaction Complete" style={{maxWidth:'20%'}}/>
          </div>
          <Label>You Sent </Label>
          <Amount id="transaction-amount">{transaction.amount} ETH</Amount>
          <Divider />
          <h3>
            From
          </h3>
          <Address id="transaction-origin">{transaction.origin}</Address>
          <h3>
            To
          </h3>
          <Address id="transaction-destination">{transaction.destination}</Address>
        </Container>
    </div>
  );
}
