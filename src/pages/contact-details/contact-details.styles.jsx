import styled from 'styled-components';
import { hexToRgb, pSBC } from '../../styles/utility.functions';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FormInput = styled.input`
  font-size: 1em;
  width: 90%;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  // border-bottom: 2px solid ${({ theme }) => theme.primaryAccent};
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em 0.75em;

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
`;

export const FormTextArea = styled.textarea`
  font-size: 1em;
  width: 90%;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  // border-bottom: 2px solid ${({ theme }) => theme.primaryAccent};
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em 0.75em;

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
`;

export const SubmitButton = styled.button`
  font-size: 1em;
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
    if (props.theme.theme === 'dark') {
      const darkRgbString = pSBC(0.4, props.theme.body, 'c');
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
        inset 0px 0px 10px 0 rgba(${darkRgb.r}, ${darkRgb.g}, ${darkRgb.b}, 0.3);
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
