import React from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants';
import {
  GitHubIconWrapper,
  LinkedInIconWrapper,
  MailIconWrapper,
} from './social-icon-button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GitHubIcon = () => (
  <GitHubIconWrapper href={GITHUB_URL} target="_blank">
    <FontAwesomeIcon icon={['fab', 'github']} />
  </GitHubIconWrapper>
);

export const LinkedInIcon = () => (
  <LinkedInIconWrapper href={LINKEDIN_URL} target="_blank">
    <FontAwesomeIcon icon={['fab', 'linkedin']} />
  </LinkedInIconWrapper>
);

export const MailIcon = () => (
  <MailIconWrapper href={LINKEDIN_URL} target="_blank">
    <FontAwesomeIcon icon={['fas', 'envelope']} />
  </MailIconWrapper>
);
