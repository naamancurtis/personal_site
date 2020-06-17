export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FORM_STATES = {
  IN_PROGRESS: 'in-progress',
  SUBMITTED: 'submitted',
  SUCCESS: 'success',
  FAILED: 'fail',
};

const _getButtonIcon = (icon) => ['fas', icon];

const _UPDATE_BUTTON = (status) => {
  switch (status) {
    case FORM_STATES.SUBMITTED:
      return _getButtonIcon('spinner');
    case FORM_STATES.SUCCESS:
      return _getButtonIcon('check-circle');
    case FORM_STATES.FAILED:
      return _getButtonIcon('times-circle');
    default:
      return _getButtonIcon('envelope');
  }
};

const _UPDATE_BUTTON_MESSAGE = (status) => {
  switch (status) {
    case FORM_STATES.SUBMITTED:
      return 'Sending Message';
    case FORM_STATES.SUCCESS:
      return 'Message Sent!';
    case FORM_STATES.FAILED:
      return 'Sending Failed';
    default:
      return 'Send Message';
  }
};

const _UPDATE_MESSAGE = (status, message) => {
  if (status !== FORM_STATES.FAILED && status !== FORM_STATES.SUCCESS)
    return null;
  if (status === FORM_STATES.FAILED) {
    return 'There appears to have been an error in sending the message, please try again. \n\n If the error persists please try and contact me on one of my social accounts.';
  }
  return message;
};

export const UPDATE_STATE = (status, newMessage) => {
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
