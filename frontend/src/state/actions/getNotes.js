import { api } from '../../urls';

export const getNotes = (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  dispatch({
    type: 'GET_NOTE_LIST_REQUEST',
  });

  fetch(api.notes, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.message) {
          throw result;
        }
        dispatch({
          type: 'GET_NOTE_LIST_SUCCESS',
          payload: result,
        });
      },
      (error) => {
        dispatch({
          type: 'GET_NOTE_LIST_ERROR',
          payload: error,
        });
      }
    )
    .catch((error) => {
     
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
