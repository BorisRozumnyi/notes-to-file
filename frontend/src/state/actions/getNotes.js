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

  fetch(api.reade, config)
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
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      dispatch({
        type: 'GET_NOTE_LIST_ERROR',
        payload: error,
      });
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
