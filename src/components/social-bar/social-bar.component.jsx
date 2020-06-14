import React from 'react';
import { SocialBarWrapper } from './social-bar.styles';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../social-icons/social-icon-button.component';

const SocialBar = () => {
  return (
    <SocialBarWrapper>
      <GitHubIcon /> <LinkedInIcon /> <MailIcon />
    </SocialBarWrapper>
  );
};

export default SocialBar;
