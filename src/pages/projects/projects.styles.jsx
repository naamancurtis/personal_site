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
  z-index: 50;
`;

export const CardStackWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  min-width: 325px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 0 1.5rem;
`;
