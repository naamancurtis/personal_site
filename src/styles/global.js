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
    padding-top: 80px;

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
}`;

