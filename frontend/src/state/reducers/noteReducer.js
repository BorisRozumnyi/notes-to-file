export const noteInitialState = {
  name: '',
  text: '',
  loading: false,
  error: {
    message: '',
  },
};

export const noteReducer = (state = noteInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_NOTE_REQUEST':
      console.info('GET_NOTE_REQUEST', action);
      return {
        ...state,
        loading: true,
      };
    case 'GET_NOTE_SUCCESS':
      console.info('GET_NOTE_SUCCESS', action);
      return {
        ...state,
        loading: false,
        error: noteInitialState.error,
        name: payload.name,
        text: payload.text,
      };
    case 'GET_NOTE_ERROR':
      console.log('GET_NOTE_ERROR', action);
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    default:
      return state;
  }
};
