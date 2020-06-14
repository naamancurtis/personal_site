import styled, { css } from 'styled-components';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
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

  ${defaultBoxShadowCss};

  &:hover {
    ${indentBoxShadowCss};
  }
`;

const GITHUB_GREY = '#f6f8fa';

export const GitHubIconWrapper = styled.a`
  ${SocialButton};
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${GITHUB_GREY};
  }
`;

const LINKEDIN_BLUE = '#2867B2';

export const LinkedInIconWrapper = styled.a`
  ${SocialButton};
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${LINKEDIN_BLUE};
  }
`;

export const MailIconWrapper = styled.a`
  ${SocialButton};
  color: ${({ theme }) => theme.text};
`;
