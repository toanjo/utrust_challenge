import React from 'react';
import { useDispatch } from 'react-redux';
import { resetUI } from '../../actions/actions';
import { LogoElement } from './styles';
import icon from '../../utils/icon.png';

import {
    useHistory
  } from "react-router-dom";

export default function Logo() {

  const history = useHistory();
  const dispatch = useDispatch();
  
  function navigate() {
    dispatch(resetUI());
    history.replace("/");
  }

  return (
    <LogoElement id="utrust-logo" onClick={() => navigate()}>
        utrust <img src={icon} alt="utrust" style={{marginBottom:'4px'}}/>
    </LogoElement>
  );
}
