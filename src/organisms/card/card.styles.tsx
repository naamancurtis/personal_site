import styled, { css } from 'styled-components';

import { emphasisedBoxShadowCss } from '../../styles/neumorphic';
import { Line } from '../../styles/components';

export const CardWrapper = styled.div`
  height: 600px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  opacity: 0;
  position: absolute;
  left: -10rem;
  top: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.body};

  ${emphasisedBoxShadowCss};

  &.dummy {
    position: absolute;
  }
`;

export const CardBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  height: 45%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: 0.8;
  margin-bottom: 1em;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTitleWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.code};
  display: flex;
  flex-flow: column wrap;
  margin-top: 1rem;
  height: 3rem;
`;

export const CardTitle = styled.span`
  font-weight: 500;
  flex-shrink: 1;
`;

export const CardRole = styled.em`
  font-weight: 300;
  align-self: flex-end;
`;

export const CardDescription = styled.p`
  margin-bottom: 0.5rem;
  flex-grow: 1;
`;

const flexRowCSS = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const StackImg = styled.img`
  height: 30px;
  margin-right: 1rem;
  background-color: transparent;
`;

export const StackTitle = styled.span`
  margin-bottom: 0.3rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.code};
  padding-right: 1rem;
`;

export const CardStack = styled.div`
  ${flexRowCSS};
  height: 2.5rem;

  & ${StackImg}:last-child {
    margin-right: 0;
  }
`;

export const CardLinkWrapper = styled.div`
  ${flexRowCSS};
  justify-content: space-between;
  height: 3rem;
`;

export const CardLine = styled(Line)`
  margin: 0.1rem 0 0.5rem 0;
`;

export const NDAOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.contrastText};
  width: 100%;
  height: 100%;
  font-size: 0.9rem;
  position: absolute;
  border-radius: 8px;
  padding: 2rem 1rem;
  top: 0;
  left: 0;
  z-index: 5;
`;
