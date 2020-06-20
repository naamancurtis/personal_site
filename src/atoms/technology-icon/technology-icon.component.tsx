import React from 'react';
import {
  TechnologyIconWrapper,
  TechnologyImg,
  HelpText,
} from './technology-icon.styles';

type TechnologyIconProps = {
  description: string;
  imgSrc: string;
  alt: string;
};

const TechnologyIcon = ({ description, imgSrc, alt }: TechnologyIconProps) => {
  return (
    <TechnologyIconWrapper>
      <TechnologyImg src={imgSrc} alt={alt} />
      <HelpText>{description}</HelpText>
    </TechnologyIconWrapper>
  );
};

export default TechnologyIcon;
