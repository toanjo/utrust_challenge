import React from 'react';
import { useDispatch } from 'react-redux';
import { copiedToClipboard } from '../../actions/actions';

import { Balance, Address, Item } from './styles';

export default function ListItem (address) {

  const dispatch = useDispatch();

  function copyToClipboard(text) {
    let textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    dispatch(copiedToClipboard());
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
