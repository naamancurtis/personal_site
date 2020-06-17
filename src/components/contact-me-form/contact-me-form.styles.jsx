import styled from 'styled-components';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
} from '../../styles/neumorphic';

export const Form = styled.form`
  height: 100;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.div`
  position: relative;
  width: 80%;
  height: max-content;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
  align-text: left;
  position: absolute;
  pointer-events: none;
  top: 0.5em;
  left: 1rem;
  transition: 300ms ease all;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 300;

  ${({ value }) => {
    if (value?.length > 0) {
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
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 0.5em 0.75em;

  ${defaultBoxShadowCss}

  &:focus {
    ${indentBoxShadowCss}
  }
`;

export const FormTextArea = styled.textarea`
  font-size: 1em;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.text};
  padding: 0.5em 0.75em;

  ${defaultBoxShadowCss}

  &:focus {
    ${indentBoxShadowCss}
  }
`;

export const FormMessageWrapper = styled.div`
  text-align: center;
  width: 70%;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
`;

export const FormSuccessMessage = styled(FormMessageWrapper)`
  color: ${({ theme }) => theme.success};
  width: 80%;
  font-weight: 400;
`;
