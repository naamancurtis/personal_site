import styled from 'styled-components';

export const GreetingWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -80px;
`;

export const Greeting = styled.div`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 2.5px;
`;

export const Name = styled.div`
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  height: 2rem;
  font-family: Fira Sans, Fifteen;
  font-weight: 900;
  color: ${({ theme }) => theme.heading};

  .leader-text {
    font-family: Fira Sans Extra Condensed;
    font-weight: 300;
    display: inline-block;
    overflow: hidden;
    height: 100%;
    vertical-align: middle;
    color: ${({ theme }) => theme.text};
  }
`;

export const Role = styled.div`
  font-family: Fira Sans, Fifteen;
  font-weight: normal;
  font-size: 1.4rem;
  margin-top: 0.25rem;
  letter-spacing: 1.6px;
  opacity: 0;
`;
