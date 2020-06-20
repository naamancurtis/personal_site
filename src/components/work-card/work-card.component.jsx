import React, { forwardRef } from 'react';

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
  NDAOverlay,
  ImageWrapper,
} from './work-card.styles';
import StyledTooltip from '../styled-tooltip/styled-tooltip.component'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  LiveButton,
  CodeButton,
  PressButton,
} from './work-button/work-button.component';

const NDAPanel = () => {
  return <NDAOverlay>Project was under a confidentiality agreement</NDAOverlay>;
};

const WorkCard = forwardRef(({ project, dummy }, ref) => {
  const theme = useContext(ThemeContext);

  return (
    <WorkCardWrapper ref={ref} className={dummy ? 'dummy' : ''}>
      <ImageWrapper>
        {project.nda ? <NDAPanel /> : null}
        <CardImage src={project.img} />
      </ImageWrapper>
      <CardBodyWrapper>
        <CardTitleWrapper>
          <CardTitle> {project.title}</CardTitle>
          <CardRole> {project.role}</CardRole>
        </CardTitleWrapper>
        <CardLine />
        {project.description.map((desc, i) => (
          <CardDescription key={i}> {desc} </CardDescription>
        ))}
        <CardLine />
        <CardStack>
          <StackTitle>Stack: </StackTitle>
          {project.stack.map(({ src, srcFn, alt }, index) => {
            let url = src;
            if (srcFn) {
              url = srcFn(theme);
            }

            return (
              <div key={index}>
                <StackImg src={url} alt={alt} data-tip={alt} />
                <StyledTooltip />
              </div>
            );
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
});

export default WorkCard;
