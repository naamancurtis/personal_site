import styled from 'styled-components';
import media from '../../styles/media';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
} from '../../styles/neumorphic';
import { Line } from '../../styles/components';

export const Fn = styled.div`
  font-family: ${({ theme }) => theme.fonts.code};
  color: ${({ theme }) => theme.text};
  padding-left: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1em 1.3em 0.7em 1.3em;
  border-radius: 10px;
  height: 100%;
  position: sticky;
  top: 85px;

  ${media.tablet`
    padding: 1em 1.1em 0.7em 1.3em;
  `};

  &:hover {
    ${defaultBoxShadowCss}
  }

  &.is-open {
    ${indentBoxShadowCss}

    &:hover {
    }
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
  margin: 0;
  opacity: 0.2;
  font-size: 0.9em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
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

  margin-top: -2.5rem;
  padding-top: 2.5rem;

  margin-bottom: -4.5rem;
  padding-bottom: 4.5rem;

  margin-left: -2rem;
  padding-left: 3rem;

  margin-right: -2rem;
  padding-right: 3rem;

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
  visible: hidden;
  display: none;
`;
