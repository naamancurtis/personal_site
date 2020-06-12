import React from 'react';
import { SkillCardWrapper, SkillImg, SmallText } from './skill-card.styles';

const SkillCard = ({
  description,
  imgSrc,
  alt,
  additional,
  showAdditionalInfo,
}) => {
  return (
    <SkillCardWrapper>
      <SkillImg src={imgSrc} alt={alt} />
      {showAdditionalInfo ? (
        <div>
          <h3> {description} </h3>
          {additional ? <SmallText>{additional}</SmallText> : null}
        </div>
      ) : null}
    </SkillCardWrapper>
  );
};

export default SkillCard;
