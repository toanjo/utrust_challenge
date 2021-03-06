import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useHistory
} from "react-router-dom";

import { processTransaction } from '../../actions/actions';

import { Title, Button } from '../../styles/common';
import { Form, Input, Label, Footer } from './styles';

export default function SendForm() {

  const [origin,setOrigin] = useState("");
  const [destination,setDestination] = useState("");
  const [amount,setAmount] = useState("");
  const [available, setAvailable] = useState(null);

  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // If transaction is completed, redirect to success page
    if(ui.redirectToSuccess) {
      history.replace("send/success")
    }
  }, [ui.redirectToSuccess, history])

  const checkFunds = useCallback(() => {
    var account = list.filter(obj => {return obj.account === origin})[0];
    setAvailable(account ? account.balance : null)
  },[list, origin])

  useEffect(() => {
    if(origin && origin.length === 42) {
      // If a valid address is entered, check the available balance for that address
      checkFunds();
    } else setAvailable(null);
  }, [origin, checkFunds])

  const submit = () => {
    var accounts = list.map(item => item.account);
    if (accounts.includes(origin)) { // Check that the origin address is an owned account
      if(list.filter(obj => {return obj.account === origin})[0].balance >= amount) { // Check that the origin account has sufficient funds
        dispatch(processTransaction({origin: origin, destination: destination, amount: amount}))
      }
      else alert('Insufficient funds in origin account!')
    } else alert('Origin Address is not valid.')    
  }

  if (!list.length) { // Refreshing the "/send" URL redirects back to the list
    history.replace("/");
    return null;
  }

  return (
    <div>
        <Title>
            Please fill the form to send Ethereum
        </Title>
        <Form>
          <Label>From</Label>
          {available && <Label id="available-funds" right>Available funds: {available} ETH</Label>}
          <Input id="origin-address" type="text" onChange={(e) => setOrigin(e.target.value)}
          placeholder="Your Address" value={origin}/>
          <Label>To</Label>
          <Input id="destination-address" type="text" onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination Address" value={destination}/>
          <Label>Amount</Label>
          <Input bold id="amount" type="number" onChange={(e) => setAmount(e.target.value)}
          placeholder="Ethereum Amount" value={amount}/>
        </Form>
        <Footer>
            <Button id="send-button" disabled={!(origin && destination && amount)}
            onClick={() => submit()}>
              Send
            </Button>
        </Footer>
    </div>
  );
}
