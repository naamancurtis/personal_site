import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  StyledButton,
  StyledIcon,
  ButtonText,
} from './plain-text-button.styles';

type BaseButtonProps = {
  url: string;
  icon: IconProp;
  text: string;
};

export const BaseButton = ({ url, icon, text }: BaseButtonProps) => {
  return (
    <StyledButton href={url} target="_blank" className="clickable">
      <StyledIcon icon={icon} className="clickable" />
      <ButtonText className="clickable">{text}</ButtonText>
    </StyledButton>
  );
};

type BespokeButtonProps = {
  url: string;
};

export const PressButton = ({ url }: BespokeButtonProps) => {
  return <BaseButton url={url} icon={['far', 'newspaper']} text="Article" />;
};

export const CodeButton = ({ url }: BespokeButtonProps) => {
  return <BaseButton url={url} icon={['fas', 'code']} text="Code" />;
};

export const LiveButton = ({ url }: BespokeButtonProps) => {
  return <BaseButton url={url} icon={['fas', 'desktop']} text="Live" />;
};
