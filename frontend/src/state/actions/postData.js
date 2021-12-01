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
    type: 'POST_DATA_REQUEST',
  });

  fetch(api.write, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.error) {
          throw result;
        }

        if (result.success) {
          dispatch({
            type: 'POST_DATA_SUCCESS',
            payload: result,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
            notificationType: 'success',
          });
        }
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        console.log('error', error);
      }
    )
    .catch((error) => {
      dispatch({
        type: 'POST_DATA_ERROR',
        payload: error,
      });
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
