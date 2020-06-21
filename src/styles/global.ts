import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

export default createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 16px;
    width: calc(100% - 2rem);
    height: 100vh;
    margin: 0 1rem;

    h1,h2,h3,h4,h5,h6 {
      font-family: ${({ theme }) => theme.fonts.heading};
    }

    p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-weight: 500;
    }
}`;
