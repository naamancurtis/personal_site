import styled from 'styled-components';
import media from '../../styles/media';
import {
  indentBoxShadowCss,
  defaultBoxShadowCss,
} from '../../styles/neumorphic';

export const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  top: 0;
  left: 0;
  padding: 0 2em 0 1em;
  background-color: ${({ theme }) => theme.body};
  z-index: 150;
  transition: box-shadow 0.3s;

  &.scrolled {
    ${defaultBoxShadowCss};
  }

  ${media.tablet`
    padding: 0 1em;
    position: fixed;
    margin: 0;
  `}
`;

export const HeaderIconsWrapper = styled.div`
  display: flex;

  ${media.tablet`
    justify-content: flex-end;
  `}
`;

export const HeaderIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 8.5px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  margin-right: 1rem;

  &.is-open {
    ${indentBoxShadowCss}
  }
`;

export const HeaderTextLink = styled.span`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 700;
`;
