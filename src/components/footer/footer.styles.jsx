import styled from 'styled-components';

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-family: ${({ theme }) => theme.fonts.code};
  font-size: 0.9em;
  padding: 1rem;
  opacity: 0.6;
  align-self: flex-end;
  z-index: 150;
`;
