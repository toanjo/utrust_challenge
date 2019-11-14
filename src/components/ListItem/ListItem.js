import React from 'react';

export default function ListItem (address) {

  function copyToClipboard(text) {
    let textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  return (
    <div className="list-item" style={{backgroundColor:'#F5F5FF'}}>
        {/* TODO - Display a "copied to clipboard" alert */}
        <span style={{cursor:'copy', fontSize:'0.85em'}} onClick={() => copyToClipboard(address.data.account)}>
          {address.data.account}
        </span>
        <strong style={{float:'right'}}>{address.data.balance} ETH</strong>
    </div>
  );
}
