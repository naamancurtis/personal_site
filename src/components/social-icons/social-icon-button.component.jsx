import React from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants';
import {
  GitHubIconWrapper,
  LinkedInIconWrapper,
  MailIconWrapper,
  SocialWrapperWithLabel,
  SocialLabel,
} from './social-icon-button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GitHubIcon = ({ showText }) => (
  <SocialWrapperWithLabel>
    <GitHubIconWrapper href={GITHUB_URL} target="_blank">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </GitHubIconWrapper>
    {showText ? <SocialLabel>GitHub</SocialLabel> : null}
  </SocialWrapperWithLabel>
);

export const LinkedInIcon = ({ showText }) => (
  <SocialWrapperWithLabel>
    <LinkedInIconWrapper href={LINKEDIN_URL} target="_blank">
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </LinkedInIconWrapper>
    {showText ? <SocialLabel>LinkedIn</SocialLabel> : null}
  </SocialWrapperWithLabel>
);

export const MailIcon = ({ showText, openModal }) => (
  <SocialWrapperWithLabel>
    <MailIconWrapper onClick={openModal}>
      <FontAwesomeIcon icon={['fas', 'envelope']} />
    </MailIconWrapper>
    {showText ? (
      <SocialLabel>
        Contact
        <br /> Me
      </SocialLabel>
    ) : null}
  </SocialWrapperWithLabel>
);
