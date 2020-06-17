import React, { useState } from 'react';
import { SocialBarWrapper } from './social-bar.styles';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../social-icons/social-icon-button.component';
import { forwardRef } from 'react';
import ContactMeModal from '../contact-me-modal/contact-me-modal.component';

const SocialBar = forwardRef(({ showText, isHidden, setIsHidden }, ref) => {
  const [showModal, setModalIsShown] = useState(false);

  const openModal = () => {
    setModalIsShown(true);
    setIsHidden(true);
  };
  const closeModal = () => setModalIsShown(false);

  return (
    <>
      {isHidden ? null : (
        <SocialBarWrapper ref={ref}>
          <GitHubIcon showText={showText} />
          <LinkedInIcon showText={showText} />
          <MailIcon showText={showText} openModal={openModal} />
        </SocialBarWrapper>
      )}
      <ContactMeModal
        showModal={showModal}
        closeModal={closeModal}
        contentLabel={'Contact Me Form'}
      />
    </>
  );
});

export default SocialBar;
