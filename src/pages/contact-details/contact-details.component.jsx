import React, { useState } from 'react';

import {
  Form,
  FormInput,
  FormTextArea,
  SubmitButton,
  FormWrapper,
  FormTitle,
  FormGroup,
  FormLabel,
} from './contact-details.styles';
import { Line } from '../../styles/components';
import AnimatedText from '../../components/text-reveal/text-reveal.component';

const ContactDetailsPage = ({ isOpen }) => {
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
      <Line />
      <AnimatedText text={'Drop me a message'} isOpen={isOpen} />
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
        <SubmitButton>Send Message</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default ContactDetailsPage;
