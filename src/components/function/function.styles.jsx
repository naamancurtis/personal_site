import styled from 'styled-components';
import {
  defaultBoxShadowCss,
  indentBoxShadowCss,
} from '../../styles/neumorphic';

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
  height: 1rem;
  margin: 0;
  opacity: 0.2;
  font-size: 0.9em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
`;

export const FnResult = styled.div`
  margin-top: 0.2em;
  text-align: right;
  font-size: 1.3em;
`;

export const FnContent = styled.div`
  margin: 0 1em;
  font-size: 1rem;
  width: 90%;
  height: 0;
  display: none;
  opacity: 0;
  cursor: default;
`;

export const ArrowWrapper = styled.span`
  position: relative;
  margin-right: 0.3em;
`;

export const FnCurlys = styled(OpaqueFnText)`
  position: relative;
  top: -1px;
`;
