import styled from 'styled-components';

export const FormErrorStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.error};
  font-size: 0.9em;
  text-align: left;
  margin-top: 0.7rem;
  margin-left: 0.5rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.code};
`;

export const FormErrorMessage = styled.span`
  padding-left: 0.7rem;
`;
