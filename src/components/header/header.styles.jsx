import styled from 'styled-components';
import { defaultBoxShadowCss } from '../../styles/neumorphic.js';

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 1em;
  background-color: ${({ theme }) => theme.body};
  z-index: 100;
  transition: box-shadow 0.3s;

  &.scrolled {
    ${defaultBoxShadowCss};
  }
`;

export default StyledHeader;
