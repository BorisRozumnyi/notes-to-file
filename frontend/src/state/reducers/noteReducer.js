export const dataInitialState = {
  notes: [],
  loading: false,
  error: {
    fields: [],
    message: '',
  },
};

export const dataReducer = (state = dataInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_NOTE_LIST_REQUEST':
      console.info('GET_NOTE_LIST_REQUEST', action);
      return {
        ...state,
        loading: true,
      };
    case 'GET_NOTE_LIST_SUCCESS':
      console.info('GET_NOTE_LIST_SUCCESS', action);
      return {
        ...state,
        loading: false,
        error: dataInitialState.error,
        notes: payload,
      };
    case 'GET_NOTE_LIST_ERROR':
      console.log('GET_NOTE_LIST_ERROR', action);
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
