import styled from 'styled-components';
import media from '../../styles/media';

export const NavWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  font-size: 1em;

  ${media.tablet`
    max-width: 70vw;
    font-size: 1.1em;
  `};

  ${media.desktop`
    max-width: 60vw;
    font-size: 1.2em;
  `}

  ${media.widescreen`
    max-width: 50vw;
    font-size: 1.3em;
  `}
`;

export const NavLineItem = styled.div`
  position: relative;
`;

export const NavHeader = styled.h2`
  display: inline-block;
  white-space: nowrap;
  font-size: 1em;
  opacity: 1;
  align-self: start;
  width: max-content;
  margin-bottom: 0.5rem;
`;

export const RoutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  ${media.tablet`
    width: 95%;
  `}
`;

export const FnDefWrapper = styled.div`
  white-space: normal;
  width: 100%;
`;

export const Curlys = styled.span`
  font-family: ${({ theme }) => theme.fonts.code};
  display: inline-block;
  white-space: nowrap;
  opacity: 1;
  align-self: start;
  font-weight: 300;
  position: relative;
  top: -1px;
`;
