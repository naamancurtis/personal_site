import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled.button`
  font-size: 50px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  height: 60px;
  cursor: pointer;
  overflow: visible;
`;
