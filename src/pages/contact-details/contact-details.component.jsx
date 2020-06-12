import React, { useState } from 'react';

import {
  Form,
  FormInput,
  FormTextArea,
  SubmitButton,
  FormWrapper,
  FormTitle,
} from './contact-details.styles';

const ContactDetailsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {};

  return (
    <FormWrapper>
      <FormTitle> Drop me a message </FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormInput
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormTextArea
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          rows="6"
        />
        <SubmitButton>Send Message</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default ContactDetailsPage;
