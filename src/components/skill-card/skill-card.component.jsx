import React from 'react';
import { SkillCardWrapper, SkillImg, HelpText } from './skill-card.styles';

const SkillCard = ({ description, imgSrc, alt }) => {
  return (
    <SkillCardWrapper>
      <SkillImg src={imgSrc} alt={alt} />
      <HelpText>{description}</HelpText>
    </SkillCardWrapper>
  );
};

export default SkillCard;
