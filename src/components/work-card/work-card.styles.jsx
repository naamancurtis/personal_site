import styled, { css } from 'styled-components';
import { defaultBoxShadowCss } from '../../styles/neumorphic';

export const WorkCardWrapper = styled.div`
  height: 600px;
  width: 90%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-text: left;
  padding: 1rem;

  ${defaultBoxShadowCss};
`;

export const CardBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
  background-color: blue;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 1em;
`;

export const CardTitleWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fonts.code};
  display: flex;
  flex-flow: column wrap;
  justify-items: space-between;
  margin-bottom: 1rem;
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
`;

const flexRowCSS = css`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
`;

export const StackImg = styled.img`
  height: 30px;
  margin-right: 1rem;
`;

export const StackTitle = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.code};
`;

export const CardStack = styled.div`
  ${flexRowCSS}

  & ${StackImg}:last-child {
    margin-right: 0;
  }
`;

export const CardLinkWrapper = styled.div`
  ${flexRowCSS}
`;
