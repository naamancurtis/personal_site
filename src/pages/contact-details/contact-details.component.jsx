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

const ContactDetailsPage = ({ showIcons }) => {
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
