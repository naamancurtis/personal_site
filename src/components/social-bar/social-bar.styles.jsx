import styled from 'styled-components';
import media from '../../styles/media';
import { pSBC } from '../../styles/utility.functions';

export const SocialBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 60px;
  background-color: ${({ theme }) => theme.body};
  z-index: 95;
  right: 0;

  padding: 2rem 2rem;
  height: 100vh;

  border-left: solid 1px ${({ theme }) => pSBC(-0.05, theme.body)};

  &.scrolled {
    box-shadow: -3px 0 6px 0 ${({ theme }) => pSBC(-0.2, theme.body)};
  }

  ${media.tablet`
    right: 1rem;
    top: 95px;
    padding: 0;
    box-shadow: none;
  `}
`;
