import React, { useState, forwardRef } from 'react';
import { SocialBarWrapper } from './social-bar.styles';
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '../../atoms/social-icons/social-icon-button.component';

import ContactMeModal from '../../organisms/contact-me-modal/contact-me-modal.component';

type SocialBarProps = {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
};

const SocialBar = forwardRef<HTMLDivElement, SocialBarProps>(
  ({ isHidden, setIsHidden }: SocialBarProps, ref) => {
    const [showModal, setModalIsShown] = useState(false);

    const openModal = () => {
      setModalIsShown(true);
      if (setIsHidden && typeof setIsHidden === 'function') {
        setIsHidden(true);
      }
    };
    const closeModal = () => setModalIsShown(false);

    return (
      <>
        {isHidden ? null : (
          <SocialBarWrapper ref={ref}>
            <GitHubIcon />
            <LinkedInIcon />
            <MailIcon openModal={openModal} />
          </SocialBarWrapper>
        )}
        <ContactMeModal showModal={showModal} closeModal={closeModal} />
      </>
    );
  }
);

export default SocialBar;
