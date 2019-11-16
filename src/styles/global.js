import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  .App {
    display: flex;
    height: 100vh;
  }

  .button {
    color: white;
    background-color: #6932D4;
    border-radius: 100px;
  }

  .button:hover {
    color: white;
  }

  .button:disabled {
    background: #6932D4;
  }

  .my-card {
    width: 580px; 
    min-height: 325px;
    border: 1px solid rgba(105, 50, 212, 0.2);
    box-shadow: 0px 8px 24px rgba(32, 37, 50, 0.15);
    border-radius: 8px;
  }

  main {
    margin: auto;
  }
`