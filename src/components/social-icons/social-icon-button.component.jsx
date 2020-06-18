import React from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/constants';
import {
  GitHubIconWrapper,
  LinkedInIconWrapper,
  MailIconWrapper,
  SocialWrapperWithLabel,
  SocialLabel,
} from './social-icon-button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GitHubIcon = ({ showText }) => (
  <SocialWrapperWithLabel className="clickable">
    <GitHubIconWrapper href={GITHUB_URL} target="_blank" className="clickable">
      <FontAwesomeIcon className="clickable" icon={['fab', 'github']} />
    </GitHubIconWrapper>
    {showText ? <SocialLabel className="clickable">GitHub</SocialLabel> : null}
  </SocialWrapperWithLabel>
);

export const LinkedInIcon = ({ showText }) => (
  <SocialWrapperWithLabel className="clickable">
    <LinkedInIconWrapper
      className="clickable"
      href={LINKEDIN_URL}
      target="_blank"
    >
      <FontAwesomeIcon className="clickable" icon={['fab', 'linkedin']} />
    </LinkedInIconWrapper>
    {showText ? (
      <SocialLabel className="clickable">LinkedIn</SocialLabel>
    ) : null}
  </SocialWrapperWithLabel>
);

export const MailIcon = ({ showText, openModal }) => (
  <SocialWrapperWithLabel className="clickable">
    <MailIconWrapper className="clickable" onClick={openModal}>
      <FontAwesomeIcon className="clickable" icon={['fas', 'envelope']} />
    </MailIconWrapper>
    {showText ? (
      <SocialLabel className="clickable">
        Contact
        <br /> Me
      </SocialLabel>
    ) : null}
  </SocialWrapperWithLabel>
);
