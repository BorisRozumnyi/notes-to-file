import { api } from '../../urls';

export const postData = (dispatch, data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({
    type: 'POST_NOTE_REQUEST',
    payload: data,
  });

  fetch(api.notes, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.error) {
          throw result;
        }

        if (result.success) {
          dispatch({
            type: 'POST_NOTE_SUCCESS',
            payload: result,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
            notificationType: 'success',
          });
        }
      },
      (error) => {
        dispatch({
          type: 'POST_NOTE_ERROR',
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
