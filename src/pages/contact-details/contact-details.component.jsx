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
import {
  SocialWrapperWithLabel,
  SocialLabel,
  SocialIconsWrapper,
} from '../../components/social-icons/social-icon-button.styles';

const ContactDetailsPage = ({ isOpen, showIcons }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FormWrapper>
      {showIcons ? (
        <>
          <Line />
          <SocialIconsWrapper>
            <SocialWrapperWithLabel>
              <GitHubIcon /> <SocialLabel>GitHub</SocialLabel>
            </SocialWrapperWithLabel>
            <SocialWrapperWithLabel>
              <LinkedInIcon /> <SocialLabel>LinkedIn</SocialLabel>
            </SocialWrapperWithLabel>
          </SocialIconsWrapper>
        </>
      ) : null}
      <Line />
      <FormTitle> Drop me a message </FormTitle>
      <br />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormInput
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormLabel value={name}>Name</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormLabel value={email}>Email</FormLabel>
        </FormGroup>
        <FormGroup>
          <FormTextArea
            id="message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            required
          />
          <FormLabel value={message}>Message</FormLabel>
        </FormGroup>
        <Button text="Send Message" icon={['far', 'envelope-open']} />
      </Form>
    </FormWrapper>
  );
};

export default ContactDetailsPage;
