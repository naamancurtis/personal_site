import React from 'react';
import { TechnologyIconWrapper, TechnologyImg, HelpText } from './technology-icon.styles';

const TechnologyIcon = ({ description, imgSrc, alt }) => {
  return (
    <TechnologyIconWrapper>
      <TechnologyImg src={imgSrc} alt={alt} />
      <HelpText>{description}</HelpText>
    </TechnologyIconWrapper>
  );
};

export default TechnologyIcon;
