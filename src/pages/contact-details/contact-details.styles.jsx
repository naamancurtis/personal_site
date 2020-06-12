import styled, { css } from 'styled-components';
import {
  hexToRgb,
  pSBC,
  convertRgbStrToObject,
} from '../../styles/utility.functions';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
} from '../../styles/neumorphic';

export const FormTitle = styled.h2`
  margin-bottom: 1em;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  text-align: center;
  margin-top: 0.5rem;
`;

export const FormLabel = styled.label`
  align-text: left;
  position: absolute;
  pointer-events: none;
  top: 0.5em;
  left: 35px;
  transition: 300ms ease all;

  ${({ value }) => {
    if (value.length > 0) {
      return `
        font-size: 0.9rem;
        top: -1.5rem;
      `;
    }
  }}

  &:focus {
    font-size: 0.9rem;
    top: -1.5rem;
  }
`;

export const FormInput = styled.input`
  font-size: 1em;
  width: 90%;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em 0.75em;

  ${defaultBoxShadowCss}

  &:focus {
    ${indentBoxShadowCss}
  }
`;

export const FormTextArea = styled.textarea`
  font-size: 1em;
  width: 90%;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em 0.75em;

  ${defaultBoxShadowCss}

  &:focus {
    ${indentBoxShadowCss}
  }
`;

export const SubmitButton = styled.button`
  font-size: 1em;
  font-weight: 700;
  width: 50%;
  color: ${({ theme }) => theme.secondaryAccent};
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  border: none;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  padding: 0.5em 0.75em;
  transition: box-shadow 0.2s;
  cursor: pointer;

  box-shadow: ${(props) => {
    const rgb = hexToRgb(props.theme.secondaryAccent);
    const bodyRGBstring = pSBC(0.4, props.theme.body, 'c');
    const bodyRGB = convertRgbStrToObject(bodyRGBstring);
    if (props.theme.theme === 'dark') {
      return `
        0px 0px 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5),
        inset 0px 0px 10px 0 rgba(${bodyRGB.r}, ${bodyRGB.g}, ${bodyRGB.b}, 0.2);
        `;
    }
    return `
    -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    6px 6px 10px 0 rgba(222, 219, 226, 0.5);
  `;
  }};

  &:hover {
    transition: box-shadow 0.2s;
    box-shadow: ${(props) => {
      const rgb = hexToRgb(props.theme.secondaryAccent);
      if (props.theme.theme === 'dark') {
        const darkRgbString = pSBC(-0.4, props.theme.body, 'c');
        const splitRgbString = darkRgbString
          .substr(4, darkRgbString.length - 5)
          .split(',');
        const darkRgb = {
          r: splitRgbString[0],
          g: splitRgbString[1],
          b: splitRgbString[2],
        };
        return `
        0px 0px 8px 0 rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5),
        inset 0px 0px 10px 0 rgba(${darkRgb.r}, ${darkRgb.g}, ${darkRgb.b}, 1);
        `;
      }
      return `
    -6px 6px 16px 0 rgba(57, 58, 71, 0.1),
    6px 6px 10px 0 rgba(222, 219, 226, 0.5);
  `;
    }};
  }
`;
