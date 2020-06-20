import { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export enum FormStatus {
  IN_PROGRESS = 'in-progress',
  SUBMITTED = 'submitted',
  SUCCESS = 'success',
  FAILED = 'fail',
}

const _getButtonIcon = (icon: IconName): IconProp => ['fas', icon];

const _UPDATE_BUTTON = (status: FormStatus) => {
  switch (status) {
    case FormStatus.SUBMITTED:
      return _getButtonIcon('spinner');
    case FormStatus.SUCCESS:
      return _getButtonIcon('check-circle');
    case FormStatus.FAILED:
      return _getButtonIcon('times-circle');
    default:
      return _getButtonIcon('envelope');
  }
};

type ButtonMessage =
  | 'Sending Message'
  | 'Message Sent!'
  | 'Sending Failed'
  | 'Send Message';

const _UPDATE_BUTTON_MESSAGE = (status: FormStatus): ButtonMessage => {
  switch (status) {
    case FormStatus.SUBMITTED:
      return 'Sending Message';
    case FormStatus.SUCCESS:
      return 'Message Sent!';
    case FormStatus.FAILED:
      return 'Sending Failed';
    default:
      return 'Send Message';
  }
};

const _UPDATE_MESSAGE = (
  status: FormStatus,
  message?: string
): string | null | undefined => {
  if (status !== FormStatus.FAILED && status !== FormStatus.SUCCESS)
    return null;
  if (status === FormStatus.FAILED) {
    return 'There appears to have been an error in sending the message, please try again. \n\n If the error persists please try and contact me on one of my social accounts.';
  }
  return message;
};

export type FormState = {
  status: FormStatus;
  button: IconProp;
  message: string | null | undefined;
  buttonMessage: ButtonMessage;
};

export const UPDATE_STATE = (
  status: FormStatus,
  newMessage?: string
): FormState => {
  const button = _UPDATE_BUTTON(status);
  const buttonMessage = _UPDATE_BUTTON_MESSAGE(status);
  const message = _UPDATE_MESSAGE(status, newMessage);
  return {
    status,
    button,
    message,
    buttonMessage,
  };
};
