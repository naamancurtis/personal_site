import React from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/constants';
import {
  IconWrapper,
  SocialWrapperWithLabel,
} from './social-icon-button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseIcon = ({ url, icon }) => (
  <SocialWrapperWithLabel className="clickable">
    <IconWrapper href={url} target="_blank" className="clickable">
      <FontAwesomeIcon className="clickable" icon={icon} />
    </IconWrapper>
  </SocialWrapperWithLabel>
);

export const GitHubIcon = () => (
  <BaseIcon url={GITHUB_URL} icon={['fab', 'github']} name="GitHub" />
);

export const LinkedInIcon = () => (
  <BaseIcon url={LINKEDIN_URL} icon={['fab', 'linkedin']} name="LinkedIn" />
);

export const MailIcon = ({ openModal }) => (
  <SocialWrapperWithLabel className="clickable" onClick={openModal}>
    <IconWrapper className="clickable">
      <FontAwesomeIcon className="clickable" icon={['fas', 'envelope']} />
    </IconWrapper>
  </SocialWrapperWithLabel>
);
