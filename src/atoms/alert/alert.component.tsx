import React from 'react';
import { StyledBanner, Message, AlertButton } from './alert.styles';

type AlertProps = {
  text: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const Alert = ({ text, buttonText, onButtonClick }: AlertProps) => {
  return (
    <StyledBanner>
      <Message>{text}</Message>
      {buttonText && (
        <AlertButton onClick={onButtonClick}>
          {buttonText.toUpperCase()}
        </AlertButton>
      )}
    </StyledBanner>
  );
};

export default Alert;
