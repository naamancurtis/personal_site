import React from 'react';
import { StyledButton, StyledIcon, ButtonText } from './work-button.styles';

export const BaseButton = ({ url, icon, text }) => {
  return (
    <StyledButton href={url} target="_blank" className="clickable">
      <StyledIcon icon={icon} className="clickable" />
      <ButtonText className="clickable">{text}</ButtonText>
    </StyledButton>
  );
};

export const PressButton = ({ url }) => {
  return <BaseButton url={url} icon={['far', 'newspaper']} text="Article" />;
};

export const CodeButton = ({ url }) => {
  return <BaseButton url={url} icon={['fas', 'code']} text="Code" />;
};

export const LiveButton = ({ url }) => {
  return <BaseButton url={url} icon={['fas', 'desktop']} text="Live" />;
};
