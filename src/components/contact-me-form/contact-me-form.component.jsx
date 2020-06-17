import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import {
  Form,
  FormInput,
  FormTextArea,
  FormGroup,
  FormLabel,
  FormSuccessMessage,
  FormMessageWrapper,
} from './contact-me-form.styles';
import Button from '../button/button.component';
import {
  EMAIL_REGEX,
  FORM_STATES,
  UPDATE_STATE,
} from './contact-me-form.utility';
import FormError from './form-error/form-error.component';

const ContactMeForm = () => {
  const { register, watch, handleSubmit, errors } = useForm();

  const [state, updateState] = useState(
    UPDATE_STATE(FORM_STATES.IN_PROGRESS, null)
  );

  const setState = (status, message) =>
    updateState(UPDATE_STATE(status, message));

  const onSubmit = async (data) => {
    setState(FORM_STATES.SUBMITTED);

    const response = await axios.post(`${process.env.REACT_APP_API}`, {
      ...data,
    });

    if (response.status === 200) {
      setState(FORM_STATES.SUCCESS, response.data);
    } else {
      setState(FORM_STATES.FAILED);
    }
  };

  return (
    <Form>
      <FormGroup>
        <FormInput
          ref={register({ required: true, minLength: 2 })}
          id="name"
          name="name"
          type="text"
        />
        <FormLabel htmlFor="name" value={watch('name')}>
          Name
        </FormLabel>
        {errors.name ? (
          <FormError
            message={
              errors.name?.type === 'required'
                ? 'Your name is required'
                : 'Your name should be at least 2 characters'
            }
          />
        ) : null}
      </FormGroup>
      <FormGroup>
        <FormInput
          ref={register({ required: true, pattern: EMAIL_REGEX })}
          id="email"
          name="email"
          type="email"
        />
        <FormLabel htmlFor="email" value={watch('email')}>
          Email
        </FormLabel>
        {errors.email ? (
          <FormError
            message={
              errors.email?.type === 'required'
                ? 'Your email is required'
                : 'Your email appears to be invalid, please check again'
            }
          />
        ) : null}
      </FormGroup>
      <FormGroup>
        <FormTextArea
          ref={register({ required: true, minLength: 5 })}
          id="message"
          name="message"
          rows="6"
        />
        <FormLabel htmlFor="message" value={watch('message')}>
          Message
        </FormLabel>
        {errors.message ? (
          <FormError
            message={
              errors.message?.type === 'required'
                ? 'Your message is required'
                : 'Your message should have a minimum length of 5 characters'
            }
          />
        ) : null}
      </FormGroup>
      {state.status === FORM_STATES.SUCCESS ? (
        <FormSuccessMessage>
          <em>{state.message}</em>
        </FormSuccessMessage>
      ) : null}
      {state.status === FORM_STATES.FAILED ? (
        <FormMessageWrapper>
          <FormError message={state.message} />
        </FormMessageWrapper>
      ) : null}
      <Button
        text={state.buttonMessage}
        icon={state.button}
        buttonClicked={handleSubmit(onSubmit)}
      />
    </Form>
  );
};

export default ContactMeForm;
