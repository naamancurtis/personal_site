import styled from 'styled-components';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
  clickedBoxShadowCss,
  underlineHighlightBoxShadow,
  underlineHighlightTextShadow,
} from '../../styles/neumorphic';
import media from '../../styles/media';

export const SubmitButton = styled.button`
  font-size: 1em;
  font-weight: 700;
  width: 80%;
  height: 3rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.body};
  border-radius: 10px;
  border: none;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  transition: box-shadow 0.2s;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  ${defaultBoxShadowCss};

  ${media.tablet`
    width: 50%;
  `}

  &:hover {
    ${underlineHighlightBoxShadow};
    ${underlineHighlightTextShadow};
  }

  &:active {
    text-shadow: none;
    ${clickedBoxShadowCss};
  }
`;

export const ButtonIcon = styled.span`
  padding: 0.5rem 1rem;
`;

export const ButtonText = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${SubmitButton}:active & {
    ${indentBoxShadowCss};
  }
`;
