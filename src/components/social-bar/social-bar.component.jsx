import React from 'react';
import { SocialBarWrapper } from './social-bar.styles';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../social-icons/social-icon-button.component';

const SocialBar = ({ showText, isHidden }) => {
  return (
    <>
      {isHidden ? null : (
        <SocialBarWrapper>
          <GitHubIcon showText={showText} />
          <LinkedInIcon showText={showText} />
          <MailIcon showText={showText} />
        </SocialBarWrapper>
      )}
    </>
  );
};

export default SocialBar;
