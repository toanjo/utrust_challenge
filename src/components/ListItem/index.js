import React from 'react';

import { Balance, Address, Item } from './styles';

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
    <Item>
        {/* TODO - Display a "copied to clipboard" alert */}
        <Address onClick={() => copyToClipboard(address.data.account)}>
          {address.data.account}
        </Address>
        <Balance>
          {address.data.balance} <span style={{fontWeight:'normal'}}>ETH</span>
        </Balance>
    </Item>
  );
}
