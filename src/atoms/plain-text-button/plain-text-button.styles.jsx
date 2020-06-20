import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledButton = styled.a`
  max-width: 50%;
  min-width: 30%;
  height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
`;

export const ButtonText = styled.span``;

export const StyledIcon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 25px;
`;
