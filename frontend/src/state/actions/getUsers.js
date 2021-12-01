import { api } from '../../urls';

export const getUsers = (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
      Authorization: `Bearer ${localStorage.getItem(
        'token'
      )}`,
    },
  };

  dispatch({
    type: 'GET_USER_LIST_REQUEST',
  });

  fetch(api.users, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.message) {
          throw result;
        }
        console.log(result);
        dispatch({
          type: 'GET_USER_LIST_SUCCESS',
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
        type: 'GET_USER_LIST_ERROR',
        payload: error,
      });
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
