import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10rem;

  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export const LoadingText = styled.h2`
  padding-top: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 30px;
`;
