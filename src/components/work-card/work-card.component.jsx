import React from 'react';

import {
  WorkCardWrapper,
  CardImage,
  CardTitle,
  CardTitleWrapper,
  CardDescription,
  CardRole,
  CardStack,
  StackImg,
  CardLinkWrapper,
  StackTitle,
  CardBodyWrapper,
} from './work-card.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const WorkCard = ({ project }) => {
  const theme = useContext(ThemeContext);

  return (
    <WorkCardWrapper>
      <CardImage />
      <CardBodyWrapper>
        <CardTitleWrapper>
          <CardTitle> {project.title}</CardTitle>
          <CardRole> {project.role}</CardRole>
        </CardTitleWrapper>
        <CardDescription>{project.description}</CardDescription>
        <CardStack>
          <StackTitle>Tech Stack </StackTitle>
          {project.stack.map(({ src, srcFn }, index) => {
            let url = src;
            if (srcFn) {
              url = srcFn(theme);
            }

            return <StackImg src={url} key={index} />;
          })}
        </CardStack>
        <CardLinkWrapper></CardLinkWrapper>
      </CardBodyWrapper>
    </WorkCardWrapper>
  );
};

export default WorkCard;
