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
  CardLine,
} from './work-card.styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  LiveButton,
  CodeButton,
  PressButton,
} from './work-button/work-button.component';

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
        <CardLine />
        <CardDescription>{project.description}</CardDescription>
        <CardLine />
        <StackTitle>Tech Stack </StackTitle>
        <CardStack>
          {project.stack.map(({ src, srcFn }, index) => {
            let url = src;
            if (srcFn) {
              url = srcFn(theme);
            }

            return <StackImg src={url} key={index} />;
          })}
        </CardStack>
        <CardLine />
        {project.links ? (
          <CardLinkWrapper>
            {project.links.live ? (
              <LiveButton url={project.links.live} />
            ) : null}
            {project.links.code ? (
              <CodeButton url={project.links.code} />
            ) : null}
            {project.links.press ? (
              <PressButton
                url={project.links.press}
                onClick={() => console.log('Button was clicked')}
              />
            ) : null}
          </CardLinkWrapper>
        ) : null}
      </CardBodyWrapper>
    </WorkCardWrapper>
  );
};

export default WorkCard;
