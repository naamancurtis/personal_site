import React from 'react';
import { SocialBarWrapper } from './social-bar.styles';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../social-icons/social-icon-button.component';
import { forwardRef } from 'react';

const SocialBar = forwardRef(({ showText, isHidden }, ref) => {
  return (
    <>
      {isHidden ? null : (
        <SocialBarWrapper ref={ref}>
          <GitHubIcon showText={showText} />
          <LinkedInIcon showText={showText} />
          <MailIcon showText={showText} />
        </SocialBarWrapper>
      )}
    </>
  );
});

export default SocialBar;
