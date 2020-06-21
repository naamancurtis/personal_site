import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants/constants';
import {
  IconWrapper,
  SocialWrapperWithLabel,
} from './social-icon-button.styles';

type BaseIconProps = {
  url: string;
  icon: IconProp;
};

const BaseIcon = ({ url, icon }: BaseIconProps) => (
  <SocialWrapperWithLabel className="clickable">
    <IconWrapper href={url} target="_blank" className="clickable">
      <FontAwesomeIcon className="clickable" icon={icon} />
    </IconWrapper>
  </SocialWrapperWithLabel>
);

export const GitHubIcon = () => (
  <BaseIcon url={GITHUB_URL} icon={['fab', 'github']} />
);

export const LinkedInIcon = () => (
  <BaseIcon url={LINKEDIN_URL} icon={['fab', 'linkedin']} />
);

type MailIconProps = {
  openModal: () => void;
};

export const MailIcon = ({ openModal }: MailIconProps) => (
  <SocialWrapperWithLabel className="clickable" onClick={openModal}>
    <IconWrapper className="clickable">
      <FontAwesomeIcon className="clickable" icon={['fas', 'envelope']} />
    </IconWrapper>
  </SocialWrapperWithLabel>
);
