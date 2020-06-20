import React from 'react';

import {
  FormWrapper,
  FormTitle,
  SocialWrapper,
} from './contact-details.styles';
import {
  GitHubIcon,
  LinkedInIcon,
} from '../../atoms/social-icons/social-icon-button.component';
import { SocialIconsWrapper } from '../../atoms/social-icons/social-icon-button.styles';
import ContactMeForm from '../../organisms/contact-me-form/contact-me-form.component';

const ContactDetailsPage = () => {
  return (
    <FormWrapper>
      <SocialWrapper>
        <SocialIconsWrapper>
          <GitHubIcon />
          <LinkedInIcon />
        </SocialIconsWrapper>
      </SocialWrapper>
      <FormTitle> Drop me a message </FormTitle>
      <ContactMeForm />
    </FormWrapper>
  );
};

export default ContactDetailsPage;
