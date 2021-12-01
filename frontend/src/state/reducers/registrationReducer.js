export const registrationInitialState = {
  message: '',
  loading: false,
  errors: {
    fields: [],
    message: '',
  },
};

export const registrationReducer = (
  state = registrationInitialState,
  action
) => {
  switch (action.type) {
    case 'POST_REGISTRATION_REQUEST':
      console.info(
        'POST_REGISTRATION_REQUEST',
        action
      );
      return {
        ...state,
        loading: true,
      };
    case 'POST_REGISTRATION_SUCCESS':
      console.info(
        'POST_REGISTRATION_SUCCESS',
        action
      );
      return {
        ...state,
        loading: false,
        errors: registrationInitialState.errors,
        message: action.payload,
      };
    case 'POST_REGISTRATION_ERROR':
      console.log(
        'POST_REGISTRATION_ERROR',
        action
      );
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
