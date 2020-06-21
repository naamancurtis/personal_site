import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SubmitButton, ButtonText, ButtonIcon } from './submit-button.styles';

interface ButtonProps {
  text: string;
  icon: IconProp;
  buttonClicked: () => void;
}

const Button = ({ text, icon, buttonClicked }: ButtonProps) => {
  return (
    <SubmitButton
      onClick={(e) => {
        e.preventDefault();
        buttonClicked();
      }}
      className="clickable"
    >
      <ButtonIcon>
        <FontAwesomeIcon
          icon={icon}
          // @ts-ignore
          className={icon.includes('spinner') ? 'fa-pulse' : ''}
        />
      </ButtonIcon>
      <ButtonText> {text} </ButtonText>
    </SubmitButton>
  );
};

export default Button;
