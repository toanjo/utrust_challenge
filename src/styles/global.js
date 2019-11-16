import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  body {
    font-family: 'Questrial', sans-serif;
  }

  main {
    margin: 10% auto;
  }

  .App {
    display: flex;
    height: 100vh;
  }

  .card {
    width: 580px; 
    min-height: 325px;
    border: 1px solid rgba(105, 50, 212, 0.2);
    box-shadow: 0px 8px 24px rgba(32, 37, 50, 0.15);
    border-radius: 8px;
  }

  .button {
    color: white;
    background-color: #6932D4;
    border-radius: 100px;

    /* base button styling copied from Bulma CSS */
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(.5em - 1px);
    text-align: center;
    white-space: nowrap;
    height: 2.5em;
    font-size: 1rem;
    position: relative;
    vertical-align: top;
    line-height: 1.5;
    text-decoration: none;
    border-color: #dbdbdb;
    border-width: 1px;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    box-shadow: none;
    display: inline-flex;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    user-select: none;
  }

  .button:hover {
    color: white;
  }

  .button:disabled {
    background: #A180E5;
    cursor: not-allowed;
  }
`