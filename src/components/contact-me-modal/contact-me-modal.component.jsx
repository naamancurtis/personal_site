import React from 'react';

import ContactMeForm from '../contact-me-form/contact-me-form.component';
import {
  ModalTitle,
  StyledModal,
  ModalWrapper,
  StyledCloseIcon,
} from './contact-me-modal.styles';
import { useTheme, ThemeContext } from 'styled-components';
import { hexToRgb } from '../../styles/utility.functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactMeModal = ({ showModal, closeModal }) => {
  const theme = useTheme(ThemeContext);

  const opaqueTheme = () => {
    const rgb = hexToRgb(theme.body);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
  };

  return (
    <StyledModal
      isOpen={showModal}
      onRequestClose={closeModal}
      style={{
        overlay: {
          top: 80,
          backgroundColor: opaqueTheme(),
        },
      }}
    >
      <ModalWrapper>
        <StyledCloseIcon onClick={closeModal}>
          <FontAwesomeIcon icon={['fas', 'times']} />{' '}
        </StyledCloseIcon>
        <ModalTitle> Contact Me </ModalTitle>
        <ContactMeForm />
      </ModalWrapper>
    </StyledModal>
  );
};

export default ContactMeModal;
