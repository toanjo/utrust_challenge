import React from 'react';
import { useDispatch } from 'react-redux';
import { resetUI } from '../../actions/actions';
import { LogoElement } from './styles';

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
    <LogoElement onClick={() => navigate()}>
        utrust
    </LogoElement>
  );
}
