import React from 'react';
import { SkillCardWrapper, SkillImg, SmallText } from './skill-card.styles';

const SkillCard = ({ description, imgSrc, alt, additional }) => {
  return (
    <SkillCardWrapper>
      <SkillImg src={imgSrc} alt={alt} />
      <div>
        <h3> {description} </h3>
        {additional ? <SmallText>{additional}</SmallText> : null}
      </div>
    </SkillCardWrapper>
  );
};

export default SkillCard;
