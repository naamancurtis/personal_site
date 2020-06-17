import React, { useState } from 'react';

import {
  Form,
  FormInput,
  FormTextArea,
  FormWrapper,
  FormGroup,
  FormLabel,
  FormTitle,
} from './contact-details.styles';
import { Line } from '../../styles/components';
import Button from '../../components/button/button.component';
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
      <br />
      <ContactMeForm />
    </FormWrapper>
  );
};

export default ContactDetailsPage;
