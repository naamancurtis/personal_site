import styled from 'styled-components';

import {
  defaultBoxShadowCss,
  clickedBoxShadowCss,
} from '../../styles/neumorphic';
import { Theme } from '../../styles/theme';

export const ToggleSwitchWrapper = styled.div`
  position: relative;
  height: 34px;
  ${defaultBoxShadowCss};
  border-radius: 4px;
`;

export const ToggleSwitchLabel = styled('label')<{ theme: Theme }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 34px;
  border-radius: 4px;
  ${clickedBoxShadowCss} 

  background-color: ${({ theme }) => theme.body};
  cursor: pointer;

  & .icon {
    display: block;
    width: 30px;
    height: 33px;
    border-radius: 3px;
    background: ${({ theme }) => theme.body};
    ${defaultBoxShadowCss};
  }
`;

export const IconWrapper = styled('span')<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  width: 30px;
  height: 33px;
  border-radius: 3px;
  background: ${({ theme }) => theme.body};
  position: relative;
  left: 0;
  ${defaultBoxShadowCss};

  transition: 0.5s;

  &.dark {
    left: 30px;
  }
`;

export const Switch = styled('input')<{ theme: Theme }>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  margin: 0;
  top: 0;
  width: 60px;
  height: 34px;

  &:checked + ${ToggleSwitchLabel} {
    background: ${({ theme }) => theme.body};
  }
`;
