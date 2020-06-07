import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    width: 100vw;
    font-family: 'Fira Sans Extra Condensed', Roboto, Helvetica;
    transition: all 0.25s linear;
  }
`;
