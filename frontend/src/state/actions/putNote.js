import { api } from '../../urls';

export const putNote = (dispatch, data) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({ type: 'PUT_NOTE_REQUEST', payload: data });

  fetch(`${api.notes}${data.fileName}`, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.error) throw result;

        console.log(result);
        dispatch({
          type: 'PUT_NOTE_SUCCESS',
          payload: data,
        });
        dispatch({
          type: 'SHOW_NOTIFICATION',
          payload: `${data.name} успешно изменён`,
        });
      },
      (error) => {
        dispatch({
          type: 'PUT_NOTE_ERROR',
          payload: error.message,
        });
        dispatch({
          type: 'SHOW_NOTIFICATION',
          payload: error.message,
          notificationType: 'error',
        });
      }
    )
    .catch((error) => console.log(error));
};
