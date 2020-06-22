import styled from 'styled-components';
import { pSBC } from '../../styles/utility.functions';
import media from '../../styles/media';
import {
  indentBoxShadowCss,
  defaultBoxShadowCss,
  clickedBoxShadowCss,
} from '../../styles/neumorphic';

export const StyledBanner = styled.div`
  top: 85px;
  position: relative;
  width: 100%;
  height: max-content;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 0 auto;
  z-index: 200;
  ${defaultBoxShadowCss};
  background-color: ${({ theme }) => pSBC(-0.3, theme.body)};

  ${media.tablet`
    width: 60%;
    position: sticky;
  `}
`;

export const Message = styled.p`
  font-size: 1.1em;
  margin-left: 2rem;
  padding: 0.5rem;
`;

export const AlertButton = styled.button`
  font-size: 1.1em;
  height: 100%;
  width: 10em;
  background-color: transparent;
  font-weight: 500;
  letter-spacing: 1.4px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0 10px 10px 0;
  padding: 0.5rem;

  ${defaultBoxShadowCss};

  &:hover {
    ${indentBoxShadowCss};
  }

  &:active {
    ${clickedBoxShadowCss};
  }
`;
