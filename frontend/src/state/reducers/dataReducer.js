export const dataInitialState = {
  data: {},
  loading: false,
  error: {
    fields: [],
    message: '',
  },
};

export const dataReducer = (state = dataInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'POST_DATA_REQUEST':
      console.info('POST_DATA_REQUEST', action);
      return {
        ...state,
        loading: true,
      };
    case 'POST_DATA_SUCCESS':
      console.info('POST_DATA_SUCCESS', action);
      return {
        ...state,
        loading: false,
        error: dataInitialState.error,
        data: payload,
      };
    case 'POST_DATA_ERROR':
      console.log('POST_DATA_ERROR', action);
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
