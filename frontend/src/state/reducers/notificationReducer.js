export const notificationInitialState = {
  message: '',
  notificationType: '', // error | success | warning | info
};

export const notificationReducer = (
  state = notificationInitialState,
  action
) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      console.info(
        'SHOW_NOTIFICATION',
        action
      );
      return {
        ...state,
        message: action.payload,
        notificationType:
          action.notificationType ||
          notificationInitialState.notificationType,
      };
    case 'HIDE_NOTIFICATION':
      console.info(
        'HIDE_NOTIFICATION',
        action
      );
      return {
        ...state,
        ...notificationInitialState,
      };
    default:
      return state;
  }
};
