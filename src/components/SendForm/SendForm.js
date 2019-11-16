import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { processTransaction } from '../../actions/actions';
import {
  useHistory
} from "react-router-dom";

export default function SendForm() {

  const [origin,setOrigin] = useState("");
  const [destination,setDestination] = useState("");
  const [amount,setAmount] = useState("");

  const list = useSelector(state => state.list)
  const ui = useSelector(state => state.ui)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if(ui.redirectToSuccess) {
      history.replace("send/success")
    }
  }, [ui.redirectToSuccess, history])

  const submit = () => {
    var accounts = list.map(item => item.account);
    if (accounts.includes(origin)) { // Check that the origin address is valid, i.e. part of the address list
      dispatch(processTransaction({origin: origin, destination: destination, amount: amount}))
    } else alert('Origin Address is not valid.')    
  }

  if (!list.length) { // Refreshing the form page leads back to the list
    history.replace("/");
    return null;
  }

  return (
    <div>
        <p className="subtitle">
            Please fill the form to send Ethereum
        </p>
        <div className="form" style={{marginBottom:'1.5rem'}}>
          <label>From</label>
          <input className="input" type="text" onChange={(e) => setOrigin(e.target.value)}
          placeholder="Your Address" value={origin}/>
          <label>To</label>
          <input className="input" type="text" onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination Address" value={destination}/>
          <label>Amount</label>
          <input className="input" type="number" onChange={(e) => setAmount(e.target.value)}
          placeholder="Ethereum Amount" value={amount}/>
        </div>
        <footer className="card-footer" style={{alignItems: "center", borderTop: "none", display:'flex', flexDirection:'row-reverse'}}>
            <button className="button is-primary" disabled={!(origin && destination && amount)}
            style={{backgroundColor:"#6932D4"}} onClick={() => submit()}>
              Send
            </button>
        </footer>
    </div>
  );
}
