import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingWrapper, LoadingText } from './loading.styles';

const Loading = () => {
  return (
    <LoadingWrapper>
      <FontAwesomeIcon icon={['fas', 'spinner']} className="fa-pulse" />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default Loading;
