import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormErrorStyle, FormErrorMessage } from './form-error.styles';

type FormErrorProps = {
  message: string | undefined | null;
};

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return <div />;

  return (
    <FormErrorStyle>
      <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormErrorStyle>
  );
};

export default FormError;
