import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0);
    height: 0;
    opacity: 0;
  }
`;

export const StyledGreeting = styled.div`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2.5px;

  &.hidden {
    animation: ${fadeOut} 1s cubic-bezier(0.08, 0.82, 0.17, 1);
  }
`;

export const StyledName = styled.div`
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  height: 2rem;
  font-family: Fira Sans, Fifteen;
  font-weight: 900;

  .leader-text {
    font-family: Fira Sans Extra Condensed;
    font-weight: 300;
    display: inline-block;
    overflow: hidden;
    height: 100%;
    vertical-align: middle;
  }
`;

export const StyledRole = styled.div`
  font-family: Fira Sans, Fifteen;
  font-weight: normal;
  font-size: 1.3rem;
  letter-spacing: 1.6px;
`;
