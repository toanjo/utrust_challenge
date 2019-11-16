import React from 'react';
import { useDispatch } from 'react-redux';
import { resetUI } from '../../actions/actions';

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
    <p style={{marginBottom:'1em'}} onClick={() => navigate()}>
        UTRUST
    </p>
  );
}
