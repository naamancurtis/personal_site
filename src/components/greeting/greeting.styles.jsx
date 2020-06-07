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
  transition: 1.5s;

  &.hidden {
    animation: ${fadeOut} 1s cubic-bezier(0.08, 0.82, 0.17, 1);
  }
`;

export const StyledName = styled.div`
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  height: 2rem;
  transition: 1.5s;

  .name {
    font-family: Fira Sans, Fifteen;
    font-weight: 900;
    font-size: 2rem;
    transition: 1.5s;
  }
`;

export const StyledRole = styled.div`
  font-family: Fira Sans, Fifteen;
  font-weight: normal;
  font-size: 1.3rem;
  letter-spacing: 1.6px;
`;
