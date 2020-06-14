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
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 1.2px;
  font-weight: 500;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;

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
