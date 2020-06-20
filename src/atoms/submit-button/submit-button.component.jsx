import React from 'react';
import { SubmitButton, ButtonText, ButtonIcon } from './submit-button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, icon, buttonClicked }) => {
  return (
    <SubmitButton onClick={buttonClicked}>
      <ButtonIcon>
        <FontAwesomeIcon
          icon={icon}
          className={icon.includes('spinner') ? 'fa-pulse' : ''}
        />
      </ButtonIcon>
      <ButtonText> {text} </ButtonText>
    </SubmitButton>
  );
};

export default Button;
