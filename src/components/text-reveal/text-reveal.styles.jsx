import styled from 'styled-components';
import { pSBC } from '../../styles/utility.functions';
import { indentBoxShadowCss } from '../../styles/neumorphic';

export const AnimationWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 1em;
  box-sizing: content-box;
`;

export const AnimatedH2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  letter-spacing: 1.2px;
  font-weight: 300;
  opacity: 0;
`;

export const AnimatedCursor = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: -5px;
  top: 0;
  z-index: 100;
  transform-origin: left;
  border-radius: 10px;
  background-color: ${({ theme }) => pSBC(-0.2, theme.primaryAccent)};
  ${indentBoxShadowCss};
`;
