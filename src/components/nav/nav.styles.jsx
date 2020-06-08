import styled from 'styled-components';
import media from '../../styles/media';

export const NavWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  ${media.tablet`
    width: 40vw;
  `};
`;

export const NavHeader = styled.h2`
  font-size: 1rem;
`;

export const NavItem = styled.div``;
