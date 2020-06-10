import { createGlobalStyle } from 'styled-components';
import LightenOrDarken from './utility.functions';
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
    padding: 0 1rem;
    ${media.tablet`
      height: 100vh; 
    `};

    .underline {
    background-image: linear-gradient(120deg, ${({ theme }) =>
      LightenOrDarken(theme.quarternayAccent, -15)} 0%, ${({ theme }) =>
  LightenOrDarken(theme.secondaryAccent, -15)} 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 92%;
    transition: background-size 0.25 ease-in;
    &:hover {
      background-size: 100% 92%;
  }
    }
  }
`;
