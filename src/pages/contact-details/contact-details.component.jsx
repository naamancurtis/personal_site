import React from 'react';

import { FormWrapper, FormTitle } from './contact-details.styles';
import { Line } from '../../styles/components';
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
        <>
          <Line />
          <SocialIconsWrapper>
            <GitHubIcon showText />
            <LinkedInIcon showText />
          </SocialIconsWrapper>
        </>
      ) : null}
      <Line />
      <FormTitle> Drop me a message </FormTitle>
      <ContactMeForm />
    </FormWrapper>
  );
};

export default ContactDetailsPage;
