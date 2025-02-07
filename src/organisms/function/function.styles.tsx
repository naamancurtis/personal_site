// @ts-nocheck
/*
 * Annoyingly, have to disable type checking for this file.
 * There's an issue: https://github.com/microsoft/TypeScript/issues/34796
 * within typescript about recursive string interpolations, so the
 * only way to get it to work is to disable it
 */

import styled from 'styled-components';
import media from '../../styles/media';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
  slightRiseBoxShadowCss,
} from '../../styles/neumorphic';
import { Line } from '../../styles/components';

export const Fn = styled('div')`
  font-family: ${({ theme }) => theme.fonts.code};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1em 1.3em 0.7em 1.3em;
  border-radius: 10px;
  height: 100%;
  position: sticky;
  top: 85px;
  ${slightRiseBoxShadowCss};

  ${media.tablet`
    padding: 1em 1.1em 0.7em 1.3em;

    &:hover {
      ${defaultBoxShadowCss}
    }
  `};

  &.is-open {
    ${indentBoxShadowCss}
  }
`;

export const OpaqueFnText = styled.span`
  opacity: 0.5;
  font-weight: 300;
  display: inline-block;
  padding-bottom: 1.5rem;
`;

export const FnDef = styled.div`
  height: 1em;
  opacity: 0.2;
  font-size: 0.9em;
  margin: 0.3em 0;
  position: sticky;
`;

export const FnResult = styled.div`
  margin-top: 0.2em;
  text-align: right;
  font-size: 1.3em;
  position: sticky;
`;

export const FnContent = styled.div`
  font-size: 1rem;
  height: 0;
  display: none;
  opacity: 0;
  cursor: default;
  overflow: hidden;

  margin: -2.5rem -2rem -4.5rem -2rem;
  padding: 2.5rem 3rem 4.5rem 3rem;

  ${media.desktop`
    font-size: 1.1rem;
  `}
`;

export const ArrowWrapper = styled.span`
  position: relative;
  margin-right: 0.3em;
`;

export const FnCurlys = styled(OpaqueFnText)`
  position: relative;
  top: -1px;
`;

export const TransparentLine = styled(Line)`
  opacity: 0;
  display: none;
`;
