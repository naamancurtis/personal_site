import styled from 'styled-components';

import {
  defaultBoxShadowCss,
  clickedBoxShadowCss,
} from '../../styles/neumorphic';

export const ToggleSwitchWrapper = styled.div`
  position: relative;
  height: 34px;
  ${defaultBoxShadowCss};
  border-radius: 4px;
`;

export const ToggleSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 34px;
  border-radius: 4px;
  ${clickedBoxShadowCss} 

  background-color: ${(props) => props.theme.body};
  cursor: pointer;

  & .icon {
    display: block;
    width: 30px;
    height: 33px;
    border-radius: 3px;
    background: ${(props) => props.theme.body};
    ${defaultBoxShadowCss};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  width: 30px;
  height: 33px;
  border-radius: 3px;
  background: ${(props) => props.theme.body};
  position: relative;
  left: 0;
  ${defaultBoxShadowCss};

  transition: 0.5s;

  &.dark {
    left: 30px;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  margin: 0;
  top: 0;
  width: 60px;
  height: 34px;

  &:checked + ${ToggleSwitchLabel} {
    background: ${(props) => props.theme.body};
  }
`;

