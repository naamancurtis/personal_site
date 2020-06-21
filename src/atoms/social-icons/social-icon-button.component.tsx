import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/constants';
import {
  IconWrapper,
  SocialWrapperWithLabel,
} from './social-icon-button.styles';
import ReactGA from 'react-ga';

type BaseIconProps = {
  url: string;
  icon: IconProp;
  name: string;
};

const BaseIcon = ({ url, icon, name }: BaseIconProps) => (
  <SocialWrapperWithLabel className="clickable">
    <IconWrapper
      href={url}
      target="_blank"
      className="clickable"
      onClick={() => {
        ReactGA.event({
          category: 'Investigate',
          action: `Clicked ${name} Button`,
        });
      }}
    >
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

type MailIconProps = {
  openModal: () => void;
};

export const MailIcon = ({ openModal }: MailIconProps) => (
  <SocialWrapperWithLabel
    className="clickable"
    onClick={() => {
      openModal();
      ReactGA.modalview('/contact-me');
    }}
  >
    <IconWrapper className="clickable">
      <FontAwesomeIcon className="clickable" icon={['fas', 'envelope']} />
    </IconWrapper>
  </SocialWrapperWithLabel>
);
