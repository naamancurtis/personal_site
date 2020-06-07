import { createGlobalStyle } from 'styled-components';
import media from './media';

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
    width: 100vw;
    font-family: 'Fira Sans Extra Condensed', 'Fira Sans', Fifteen, Roboto, Helvetica;
    transition: all 0.25s linear;
    padding: 0 1rem;
    ${media.tablet`
      height: 100vh; 
    `};
  }
`;
