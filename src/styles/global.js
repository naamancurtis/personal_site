import { createGlobalStyle } from 'styled-components';
import { LightenDarkenColor } from './utility.functions';
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

    h1,h2,h3,h4,h5,h6 {
      font-family: ${({ theme }) => theme.fonts.heading};
    }

    p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-weight: 500;
  }

    padding: 0 1rem;
    ${media.tablet`
      height: 100vh; 
    `};

    .underline {
      background-image: linear-gradient(120deg, ${({ theme }) =>
        LightenDarkenColor(theme.quarternayAccent, -15)} 0%, ${({ theme }) =>
  LightenDarkenColor(theme.secondaryAccent, -15)} 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.2em;
      background-position: 0 105%;
    transition: background-size 0.25 ease-in;

      &:hover {
        background-size: 110% 98%;
        color: ${({ theme }) => theme.body};
      }
    }
  }
`;
