import React from 'react';
import { useSelector } from 'react-redux';
import {
  useHistory
} from "react-router-dom";

export default function Success() {

  const transaction = useSelector(state => state.lastTransaction)
  const history = useHistory();

  if (!transaction) { // Refreshing the success page leads back to the list
    history.replace("/");
    return null;
  }
  return (
    <div>
        <p className="subtitle">
            Transaction Complete
        </p>
        <div style={{textAlign:'center'}}>
            <img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG47.png" alt="Transaction Complete" style={{maxWidth:'20%'}}/>
        </div>
        <h2>You Sent </h2>
        <h1>{transaction.amount} ETH</h1>
        <hr />
        <h2>
          From
        </h2>
        {transaction.origin}
        <h2>
          To
        </h2>
        {transaction.destination}
    </div>
  );
}
