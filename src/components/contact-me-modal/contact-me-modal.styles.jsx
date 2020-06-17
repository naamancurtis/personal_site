import styled from 'styled-components';
import Modal from 'react-modal';
import media from '../../styles/media';

import { defaultBoxShadowCss } from '../../styles/neumorphic';

export const ModalTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 400;
  margin: 2rem 0;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  border: none;
  height: 98%;
  top: 5px;

  &:focus {
    outline: 0;
  }

  ${media.tablet`
  top: 20px;
  width: 50%;
  left: 25%;
  `}
`;

export const ModalWrapper = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  ${defaultBoxShadowCss};
`;

export const StyledCloseIcon = styled.div`
  font-size: 1.5rem;
  align-self: end;
  padding: 1rem;
  cursor: pointer;
`;
