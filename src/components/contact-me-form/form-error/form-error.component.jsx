import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormErrorStyle, FormErrorMessage } from './form-error.styles';

const FormError = ({ message }) => {
  return (
    <FormErrorStyle>
      <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormErrorStyle>
  );
};

export default FormError;
