export const userListInitialState = {
  list: [],
  loading: false,
  errors: {
    fields: [],
    message: '',
  },
};

export const userListReducer = (
  state = userListInitialState,
  action
) => {
  switch (action.type) {
    case 'GET_USER_LIST_REQUEST':
      console.info(
        'GET_USER_LIST_REQUEST',
        action
      );
      return {
        ...state,
        loading: true,
      };
    case 'GET_USER_LIST_SUCCESS':
      console.info(
        'GET_USER_LIST_SUCCESS',
        action
      );
      return {
        ...state,
        loading: false,
        list: action.payload,
        errors: userListInitialState.errors,
      };
    case 'GET_USER_LIST_ERROR':
      console.log(
        'GET_USER_LIST_ERROR',
        action
      );
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
