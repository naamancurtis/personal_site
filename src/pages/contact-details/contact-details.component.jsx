import React from 'react';

import {
  FormWrapper,
  FormTitle,
  SocialWrapper,
} from './contact-details.styles';
import {
  GitHubIcon,
  LinkedInIcon,
} from '../../components/social-icons/social-icon-button.component';
import { SocialIconsWrapper } from '../../components/social-icons/social-icon-button.styles';
import ContactMeForm from '../../components/contact-me-form/contact-me-form.component';

const ContactDetailsPage = ({ isOpen, showIcons }) => {
  return (
    <FormWrapper>
      {showIcons ? (
        <SocialWrapper>
          <SocialIconsWrapper>
            <GitHubIcon showText />
            <LinkedInIcon showText />
          </SocialIconsWrapper>
        </SocialWrapper>
      ) : null}
      <FormTitle> Drop me a message </FormTitle>
      <ContactMeForm />
    </FormWrapper>
  );
};

export default ContactDetailsPage;
