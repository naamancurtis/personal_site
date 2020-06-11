import styled from 'styled-components';
import media from '../../styles/media';

export const NavWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  display: inline-block;
  white-space: nowrap;
  width: 90vw;
  ${media.tablet`
    max-width: 40vw;
  `};
`;

export const NavHeader = styled.h2`
  font-size: 1.1em;
  opacity: 0.7;
`;

export const FnDefWrapper = styled.div`
  margin-right: 1.2em;
  white-space: normal;
`;
