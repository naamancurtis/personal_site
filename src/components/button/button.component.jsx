import React from 'react';
import { SubmitButton, ButtonText, ButtonIcon } from './button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, icon }) => {
  return (
    <SubmitButton>
      <ButtonIcon>
        <FontAwesomeIcon icon={icon} />
      </ButtonIcon>
      <ButtonText> {text} </ButtonText>
    </SubmitButton>
  );
};

export default Button;
