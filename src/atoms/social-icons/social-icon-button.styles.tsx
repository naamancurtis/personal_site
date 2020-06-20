import styled, { css } from 'styled-components';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
  clickedBoxShadowCss,
} from '../../styles/neumorphic';

export const SocialButton = css`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  margin: 0.5rem 0;
  background-color: ${({ theme }) => theme.body};

  ${defaultBoxShadowCss};

  &:hover {
    ${indentBoxShadowCss};
  }

  &:active {
    ${clickedBoxShadowCss};
  }
`;

export const IconWrapper = styled.a`
  ${SocialButton};
  color: ${({ theme }) => theme.text};
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const SocialWrapperWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;