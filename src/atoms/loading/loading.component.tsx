import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingWrapper, LoadingText } from './loading.styles';

export const Loading = () => {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={['fas', 'spinner']} className="fa-pulse" />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export const LoadingFailure = () => {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={['fas', 'robot']} />
      <LoadingText>Loading has failed, please reload.</LoadingText>
    </LoadingWrapper>
  );
};
