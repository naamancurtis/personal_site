import React from 'react';
import { LoadingWrapper, LoadingText } from './loading.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loading = () => {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={['fas', 'spinner']} className="fa-pulse" />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
