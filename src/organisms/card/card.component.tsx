import React, { forwardRef, useContext } from 'react';

import { ThemeContext } from 'styled-components';
import {
  CardWrapper,
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
} from './card.styles';
import StyledTooltip from '../../atoms/styled-tooltip/styled-tooltip.component';

import {
  LiveButton,
  CodeButton,
  PressButton,
} from '../../atoms/plain-text-button/plain-text-button.component';
import { Project } from '../../models/project';

const NDAPanel = () => {
  return <NDAOverlay>Project was under a confidentiality agreement</NDAOverlay>;
};

type CardProps = {
  project: Project;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ project }: CardProps, ref) => {
    const theme = useContext(ThemeContext);

    if (!project) return <div />;

    return (
      <CardWrapper ref={ref}>
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
                <PressButton url={project.links.press} />
              ) : null}
            </CardLinkWrapper>
          ) : null}
        </CardBodyWrapper>
      </CardWrapper>
    );
  }
);

export default Card;
