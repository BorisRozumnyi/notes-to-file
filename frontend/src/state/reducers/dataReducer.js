export const dataInitialState = {
  message: '',
  loading: false,
  error: {
    fields: [],
    message: '',
  },
};

export const dataReducer = (
  state = dataInitialState,
  action
) => {
  switch (action.type) {
    case 'POST_DATA_REQUEST':
      console.info(
        'POST_DATA_REQUEST',
        action
      );
      return {
        ...state,
        loading: true,
      };
    case 'POST_DATA_SUCCESS':
      console.info(
        'POST_DATA_SUCCESS',
        action
      );
      return {
        ...state,
        loading: false,
        errors: dataInitialState.errors,
        message: action.payload,
      };
    case 'POST_DATA_ERROR':
      console.log(
        'POST_DATA_ERROR',
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
