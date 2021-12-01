import { api } from '../../urls';

export const postLogin = (
  dispatch,
  data
) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({
    type: 'UPDATE_USER_REQUEST',
  });

  fetch(api.login, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.message) {
          throw result;
        }

        if (result.token) {
          localStorage.setItem(
            'token',
            result.token
          );
          localStorage.setItem(
            'username',
            data.username
          );
          dispatch({
            type: 'UPDATE_USER_SUCCESS',
            payload: data.username,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: `${data.username}! Добро пожаловать!!!`,
          });
        }
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      dispatch({
        type: 'UPDATE_USER_ERROR',
        payload: error.message,
      });
      dispatch({
        type: 'SHOW_NOTIFICATION',
        payload: error.message,
        notificationType: 'error',
      });
    });
};
