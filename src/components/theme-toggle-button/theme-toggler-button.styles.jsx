import styled from 'styled-components';
import LightenDarkenColor from '../../styles/utility.functions';

import Sun from './sun.svg';
import Moon from './moon.svg';

export const ToggleSwitchWrapper = styled.div`
  position: relative;
  height: 34px
`;

export const ToggleSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 34px;
  border-radius: 4px;
  box-shadow: ${(props) => {
    if (props.theme.theme === 'dark') {
      return `
        inset 3px 3px 16px 0 rgba(222, 219, 226, 0.1),
        inset -6px -6px 10px 0 rgba(57, 58, 71, 0.5);
        `;
    }
    return `
    inset -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    inset 6px 6px 10px 0 rgba(222, 219, 226, 0.5);
  `;
  }}

  background-color: ${(props) => props.theme.body};
  cursor: pointer;

  &::after {
    line-height: 35px;
    text-align: center;
    content: url(${Sun});
    color: ${(props) => props.theme.text};
    display: block;
    width: 30px;
    height: 33px;
    border-radius: 3px;
    background: ${(props) => props.theme.body};
    box-shadow: 3px 0px 3px 1px rgba(57, 58, 71, 0.2),
    -2px -2px 10px rgba(57, 58, 71, 0.1);

    border: 1px solid ${(props) => LightenDarkenColor(props.theme.body, -3)};
    transition: 0.5s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  margin: 0;
  width: 60px;props.theme.body
  height: 35px;

  &:checked + ${ToggleSwitchLabel} {
    background: ${(props) => props.theme.body};

    &::after {
      content: url(${Moon});
      fill: ${(props) => props.theme.text};
      display: block;
      width: 30px;
      height: 33px;
      margin-left: 30px;
      box-shadow: -3px 0px 3px 1px rgba(0, 0, 0, 0.2),
        2px 2px 10px 0 rgba(222, 219, 226, 0.1);
      transition: 0.5s;
      border-radius: 3px;
      border: 1px solid ${(props) => LightenDarkenColor(props.theme.body, -3)};
    }
  }
`;

