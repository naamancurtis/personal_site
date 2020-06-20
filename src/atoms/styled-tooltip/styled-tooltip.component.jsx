import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { defaultBoxShadowCss } from '../../styles/neumorphic';

export default styled(ReactTooltip)`
  &.type-dark.place-top {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fonts.code};
    opacity: 0.8;
    z-index: 115;

    ${defaultBoxShadowCss};

    &:after {
      border-top-color: ${({ theme }) => theme.body};
    }
  }
`;
