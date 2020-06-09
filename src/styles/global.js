import { createGlobalStyle } from 'styled-components';
import media from './media';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    width: 100vw;
    height: 100vh;

    font-family: 'Fira Sans Extra Condensed', 'Fira Sans', Fifteen, Roboto, Helvetica;
    transition: all 0.25s linear;
    padding: 0 1rem;
    ${media.tablet`
      height: 100vh; 
    `};
  }
`;
