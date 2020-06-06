import styled from 'styled-components';
import LightenDarkenColor from '../../styles/utility.functions';

const NeumorphicToggleButton = styled.button`
  box-shadow: -12px 12px 16px
      ${(props) => LightenDarkenColor(props.theme.body, -50)},
    8px -8px 12px ${(props) => LightenDarkenColor(props.theme.body, 50)};
  background-color: ${(props) => props.theme.body};
  width: 75px;
  border: none;
  color: ${(props) => props.theme.text};
  border-radius: 3px;
`;

export const ToggleSwitchWrapper = styled.div`
  position: relative;
`;

export const ToggleSwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 35px;
  border-radius: 3px;
  border: solid 1px pink;
  background-color: ${(props) => props.theme.text};
  cursor: pointer;
  overflow: hidden;

  &::after {
    line-height: 35px;
    text-align: center;
    content: 'HELP';
    color: white;
    display: block;
    width: 31px;
    height: 35px;
    background: ${(props) => props.theme.body};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  margin: 0;
  width: 60px;
  height: 35px;

  &:checked + ${ToggleSwitchLabel} {
    background: ${(props) => props.theme.text};
    &::after {
      content: 'ME';
      display: block;
      width: 31px;
      height: 35px;
      margin-left: 30px;
      transition: 0.2s;
    }
  }
`;

export default NeumorphicToggleButton;
